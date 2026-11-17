# Tutor de los apuntes

El tutor se incorpora desde `layouts/single.html` a las páginas individuales de
las secciones `apuntes-*`. En escritorio el botón abre un panel de entre 360 y
560 px, según el espacio disponible en el margen izquierdo. En una ventana de
1920 px ocupa 540 px, dejando 24 px de separación respecto a los apuntes.
Si el margen es más estrecho, el panel se superpone a los
apuntes mientras está abierto. El contenido conserva su posición central y el
índice permanece a la derecha.

En móvil el tutor se abre con un botón circular abajo a la izquierda, del mismo
tamaño que el botón del índice situado a la derecha. Abrir uno cierra el otro.
El panel adapta su altura al espacio disponible y al teclado en pantalla.

Las traducciones de la interfaz están en `i18n/es.yaml`, `i18n/en.yaml` e
`i18n/ca.yaml`, con las claves `notes_tutor_*`. Un fragmento seleccionado dentro
de los apuntes se incorpora a la siguiente consulta. Si no hay selección, el
apartado mostrado se actualiza al desplazarse por la página con el tutor abierto
y al cambiar el tamaño de la ventana. Al enviar la pregunta se comprueba de nuevo
el apartado actual. El contexto se toma del texto generado por Hugo, conservando
el código de las fórmulas. El contexto muestra la ruta del apartado, por ejemplo
«Ondas → Ondas armónicas → Frecuencia», también cuando hay un fragmento
seleccionado. «Fijar apartado» detiene el seguimiento de la lectura y «Seguir
lectura» lo reanuda. El fragmento seleccionado se puede desplegar sin añadir
otra zona de desplazamiento.

El campo de pregunta permanece visible mientras se recorre la conversación.
Las sugerencias «Explícalo más fácil» y «Ponme un ejemplo» rellenan un borrador;
no lo envían automáticamente.

## Carga de recursos

La página carga únicamente los estilos del botón y un pequeño módulo para abrir
el tutor. El código del chat (`assets/js/notes-tutor.mjs`), los estilos del panel
y el contexto de los apuntes se descargan al pulsarlo por primera vez. El contexto
se genera como un recurso JSON con huella de contenido, separado del HTML.
Los recursos se reutilizan al cerrar y volver a abrir el panel; también se conserva
la conversación. Si una descarga falla, se muestra un mensaje y se puede reintentar.
El texto seleccionado antes del primer clic se conserva mientras se carga el tutor.

En páginas con fórmulas, MathJax sigue cargándose al entrar para mostrar los
apuntes. En las demás páginas solo se descarga al abrir el tutor. Los estilos del
panel se compilan por separado; los colores compartidos están en
`assets/scss/_nord.scss`.

## Estado inicial

No hay un modelo elegido ni un servicio activado. En `config/_default/params.yaml`:

```yaml
notes_tutor:
  enabled: true
  endpoint: ""
```

Con el endpoint vacío, el panel muestra «El tutor estará disponible pronto» y el
botón de envío está desactivado. Se puede escribir y probar las sugerencias,
pero no se envían consultas ni se consume Workers AI.
Para ocultarlo en toda la web, cambia `enabled` a `false`. Para ocultarlo en una
página, añade `tutor: false` a su front matter.

## Activación cuando se elija el modelo

1. Comprueba en Cloudflare que la cuenta utiliza Workers Free y que el modelo
   elegido admite la cuota gratuita. El código no puede comprobar el plan de
   facturación: en Workers Paid, el consumo adicional puede ser facturable.
2. En `workers/notes-tutor/wrangler.jsonc`, configura `AI_MODEL` con el identificador
   exacto del modelo y cambia `ENABLED` a `"true"`. El modelo solo se elige en el
   servidor; los visitantes no pueden cambiarlo en una consulta.
3. Revisa que el identificador del limitador `41001` no se utilice para otro fin
   en tu cuenta. La configuración permite unas cinco consultas por minuto e IP
   en cada ubicación de Cloudflare; no es un contador global estricto.
4. Desde `workers/notes-tutor`, utiliza Wrangler 4.36 o posterior:

   ```sh
   npx wrangler@4 login
   npx wrangler@4 deploy
   ```

5. Copia la URL del Worker y añade `/api/tutor`. Configura ese valor como
   `notes_tutor.endpoint`, por ejemplo
   `https://fisiquimicamente-notes-tutor.TU-SUBDOMINIO.workers.dev/api/tutor`.
6. Construye y publica Hugo con el procedimiento habitual. El despliegue existente
   de Pages no necesita cambios: el Worker se publica por separado. También se
   puede configurar una ruta `/api/tutor` en el dominio propio y usar ese endpoint
   relativo cuando dicha ruta esté creada.

El Worker permite los tres dominios actuales. Para una prueba local, añade
temporalmente el origen de Hugo a `ALLOWED_ORIGINS`. No publiques orígenes locales
como configuración definitiva. La comprobación del origen reduce llamadas desde
otras webs, pero no autentica a los visitantes ni impide por sí sola las llamadas
de bots. Para un lanzamiento con mucho tráfico puede añadirse Turnstile.

## Datos y límites

Cada pregunta envía título, URL, idioma, etiquetas, apartado, hasta 12 000 caracteres
de contexto, hasta 4000 caracteres seleccionados y los últimos seis mensajes.
La pregunta admite 1200 caracteres y la generación está limitada a 3072 tokens.
Se piden explicaciones de unas 150–250 palabras por defecto, con margen para
desarrollar los pasos necesarios. Los modelos pueden consumir parte del límite
en razonamiento. La respuesta se muestra completa, sin recortarla por caracteres.
Si el proveedor indica que ha agotado los tokens (`finish_reason: length`), se
muestra un aviso traducido para que el usuario pueda pedir que continúe. No se
hacen consultas adicionales automáticamente. Para acotar el historial enviado,
se conservan hasta los últimos 6000 caracteres de cada respuesta, incluido su final.

El historial vive en memoria de la pestaña y se pierde al recargar. Se puede borrar
desde el panel, incluso mientras se espera una respuesta. El código no almacena
las conversaciones ni las escribe en registros; sí las envía a Cloudflare para
responder. La interfaz lo indica antes de enviar la consulta. Cancelar la espera
en el navegador no garantiza que una inferencia iniciada se detenga en el servidor.

Las respuestas admiten párrafos, listas numeradas y con viñetas, negrita, cursiva
y código. Ese formato se construye con nodos del DOM sin interpretar HTML del
modelo. Las fórmulas LaTeX se renderizan con MathJax y su extensión `ui/safe`,
manteniendo el texto si no se puede cargar o renderizar una expresión. Las
páginas sin `math: true` lo cargan al abrir el tutor.
Si la cuota se agota o falla el proveedor, el panel muestra que el servicio no
está disponible y conserva la pregunta para volver a intentarlo.

## Verificación

```sh
node --test workers/notes-tutor/test/worker.test.mjs
node --test tests/notes-tutor*.test.mjs
node --check assets/js/notes-tutor.mjs
node --check assets/js/notes-tutor-loader.mjs
hugo --buildFuture
```

Las pruebas del Worker usan una respuesta simulada y no llaman a Workers AI.
Antes de activarlo, comprueba el modelo real con dudas de los apuntes, unidades,
ecuaciones y preguntas con premisas equivocadas. Revisa también el consumo en
Cloudflare. La integración con un modelo real queda pendiente de su elección.

Referencias: [Workers AI bindings](https://developers.cloudflare.com/workers-ai/configuration/bindings/),
[cuota y facturación](https://developers.cloudflare.com/workers-ai/platform/pricing/),
[limitador de peticiones](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/).
