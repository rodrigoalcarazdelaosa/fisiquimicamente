# Tutor de los apuntes

El tutor se incorpora desde `layouts/single.html` a las páginas individuales de
las secciones `apuntes-*`. En escritorio el botón abre un panel de entre 360 y
560 px, según el espacio disponible en el margen izquierdo. En una ventana de
1920 px ocupa 540 px, dejando 24 px de separación respecto a los apuntes.
El botón se alinea con el borde derecho del panel, cerca de la zona de lectura.
En ventanas más estrechas se desplaza lo necesario para no tapar los apuntes.
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

El tutor descarga KaTeX al recibir su primera fórmula. Los estilos del panel se
compilan por separado y los colores compartidos están en `assets/scss/_nord.scss`.

## Configuración actual

El modelo configurado es `@cf/google/gemma-4-26b-a4b-it`. El Worker está habilitado
en `workers/notes-tutor/wrangler.jsonc`. En `config/_default/params.yaml`:

```yaml
notes_tutor:
  enabled: true
  endpoint: "https://fisiquimicamente-notes-tutor.fisiquimicamente.workers.dev/api/tutor"
```

Con el endpoint vacío, el panel muestra «El tutor estará disponible pronto» y el
botón de envío está desactivado. Se puede escribir y probar las sugerencias,
pero no se envían consultas ni se consume Workers AI.
Para ocultarlo en toda la web, cambia `enabled` a `false`. Para ocultarlo en una
página, añade `tutor: false` a su front matter.

## Publicación o cambio de modelo

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
El contexto es texto extraído por Hugo con `.Plain | htmlUnescape`, no el Markdown
original. Conserva las fórmulas TeX y el texto visible, pero no el marcado original
ni los archivos de imagen. La URL de la página se envía como metadato: el Worker
no visita esa URL ni descarga sus imágenes. El modelo recibe instrucciones para
pedir una descripción si una pregunta depende de una figura que no puede ver.

La pregunta admite 1200 caracteres y la generación está limitada a 3072 tokens.
Se piden explicaciones de unas 150–250 palabras por defecto, con margen para
desarrollar los pasos necesarios. Los modelos pueden consumir parte del límite
en razonamiento. La respuesta se muestra completa, sin recortarla por caracteres.
Si el proveedor indica que ha agotado los tokens (`finish_reason: length`), se
muestra un aviso traducido para que el usuario pueda pedir que continúe. No se
hacen consultas adicionales automáticamente. Para acotar el historial enviado,
se conservan hasta los últimos 6000 caracteres de cada respuesta, incluido su final.

## Razonamiento adaptativo

`workers/notes-tutor/src/reasoning.mjs` decide el modo antes de llamar al modelo.
Solo para `@cf/google/gemma-4-26b-a4b-it`, el Worker envía
`chat_template_kwargs.enable_thinking` como `false` o `true`, según la consulta.
No se hacen llamadas de clasificación a otra IA ni se añaden dependencias.

Las definiciones, las comparaciones directas y las explicaciones conceptuales
claras usan el modo rápido. Por ejemplo, «¿Qué es un enlace covalente?» y
«Explica por qué el agua es polar». Los cálculos, las deducciones, la interpretación
de datos y las relaciones entre varios conceptos mantienen el razonamiento.
«Calcula el pH de un ácido débil» lo activa aunque falten los datos: el modelo
debe pedirlos. El nombre de un tema, como equilibrio o termodinámica, no suma
puntos por sí solo. La decisión combina intención, magnitudes, datos, cambios
de condiciones y referencias a otros pasos; los casos inciertos conservan el
razonamiento.

Los seguimientos consultan las preguntas recientes y, cuando se alude a un
ejercicio seleccionado, su contexto. «Ponme un ejemplo» después de una definición
puede ir al modo rápido; después de un problema mantiene el razonamiento.
Una nueva definición no hereda la complejidad de un ejercicio anterior. Las
reglas cubren español, inglés y catalán. Son heurísticas conservadoras: no
constituyen una evaluación semántica completa ni garantizan la corrección de
las respuestas. El parámetro de modo se fija en el servidor; un visitante no
puede cambiarlo en el cuerpo de su petición.

## Respuestas en streaming

El navegador solicita `application/x-ndjson`. El Worker activa `stream: true` en
Workers AI y transforma los eventos SSE del proveedor en líneas JSON: `delta`
con el texto nuevo, `done` con el indicador de límite y `error` con un error
genérico. Solo se transmite la explicación pública; se descartan los campos de
razonamiento, los bloques `<think>` y los canales `<|channel>thought` de Gemma,
aunque sus etiquetas lleguen fragmentadas.
El Worker mantiene la respuesta JSON anterior para navegadores que aún no se
hayan actualizado. El navegador también acepta JSON si el Worker sigue en su
versión anterior; se pueden desplegar ambos componentes por separado.

La explicación aparece mientras se genera, con el formato actualizado como
máximo una vez por fotograma. KaTeX renderiza las fórmulas al terminar para
evitar procesar expresiones incompletas. La espera se cancela después de 45
segundos sin recibir texto nuevo. Si la conexión se interrumpe, se conserva la
respuesta parcial y la pregunta, y aparece un aviso traducido. La respuesta
parcial se añade al historial para que se pueda pedir que continúe. Borrar la
conversación cancela la lectura; el Worker propaga esa cancelación al flujo del
proveedor. No se reintenta automáticamente.

## Medición de rendimiento

Cada llamada al modelo genera un registro JSON `notes_tutor_performance` al
terminar, fallar o cancelarse. `PERFORMANCE_LOGS: "true"` activa estos registros.
La configuración de Wrangler activa Workers Logs y desactiva los registros
automáticos de invocación y las trazas. Los registros propios contienen modelo,
modo, regla del clasificador, tiempos, resultado y contadores de tokens cuando
el proveedor los facilita. No incluyen preguntas, respuestas, URL, cabeceras,
direcciones IP ni mensajes originales de error.

| Campo | Qué mide |
| --- | --- |
| `classifier_ms` | Duración local de la selección del modo. |
| `pre_model_ms` | Desde la recepción hasta iniciar la llamada, incluida la preparación y el limitador. |
| `first_chunk_ms` | Hasta leer el primer fragmento bruto del proveedor, aunque solo contenga metadatos. |
| `first_model_token_ms` | Hasta procesar el primer fragmento de contenido del modelo, público o de razonamiento. |
| `first_visible_ms` | Hasta enviar el primer contenido público no vacío al navegador. |
| `total_ms` | Desde la recepción hasta el final de la generación, error o cancelación. |
| `generation_ms` | Desde la llamada al modelo hasta ese final. |
| `reasoning_observed` | Si se ha recibido razonamiento oculto o un contador positivo de tokens de razonamiento. |
| `reasoning_tokens`, `output_tokens` | Contadores del proveedor; `null` si no los proporciona. |

Los tiempos se expresan en milisegundos. `first_visible_ms` es una medida del
servidor: no incluye la red entre Worker y navegador ni el repintado de la
pantalla. En respuestas JSON antiguas solo se puede medir la recepción completa.
Un contador ausente o `reasoning_observed: false` no demuestra que no haya habido
razonamiento: el proveedor puede no mostrarlo. El tiempo anterior al primer
fragmento también puede incluir cola, red y preparación del modelo.

En Cloudflare, abre el Worker → Observability → Logs y filtra por el evento
`notes_tutor_performance`. Compara mediana y percentil 95 de `first_visible_ms`
entre modos con las mismas preguntas y contextos. Conserva también los errores
y los cortes por límite; excluirlos podría ocultar una regresión de calidad.
Para diagnosticar la espera, compara `pre_model_ms`, `first_chunk_ms` y
`first_visible_ms`: no atribuyas toda la diferencia al razonamiento sin datos.

El historial vive en memoria de la pestaña y se pierde al recargar. Se puede borrar
desde el panel, incluso mientras se espera una respuesta. El código no almacena
las conversaciones ni las escribe en registros; sí las envía a Cloudflare para
responder. La interfaz lo indica antes de enviar la consulta. Cancelar la espera
en el navegador no garantiza que una inferencia iniciada se detenga en el servidor.

Las respuestas admiten párrafos, listas numeradas y con viñetas, negrita, cursiva
y código. Ese formato se construye con nodos del DOM sin interpretar HTML del
modelo. KaTeX renderiza las fórmulas LaTeX en MathML con `trust: false` y límites
de expansión. El tutor conserva el TeX si falla la descarga o el renderizado.
Si la cuota se agota o falla el proveedor, el panel muestra que el servicio no
está disponible y conserva la pregunta para volver a intentarlo.

## Verificación

```sh
node --test workers/notes-tutor/test/*.test.mjs
node --test tests/notes-tutor*.test.mjs
node --check assets/js/notes-tutor.mjs
node --check assets/js/notes-tutor-loader.mjs
hugo --buildFuture
```

Las pruebas del Worker usan respuestas simuladas y no llaman a Workers AI.
Comprueban fragmentos UTF-8, entrega progresiva, filtrado del razonamiento,
cancelación, errores, avisos de límite, selección del modo e instrumentación.
Una prueba recorre el Worker y el código del navegador con un flujo controlado
y comprueba que el primer texto aparece antes de que termine la generación.
Después de publicar cambios, comprueba
el modelo real con dudas de los apuntes, unidades, ecuaciones y preguntas con
premisas equivocadas. Revisa también el consumo en Cloudflare.

La evaluación local del clasificador y de la preparación de mensajes no consume
neuronas:

```sh
node workers/notes-tutor/tools/evaluate-reasoning.mjs
```

`test/reasoning-cases.mjs` incluye las ocho preguntas de referencia y casos
adicionales, con criterios de revisión científica para la evaluación real.
Para comparar con razonamiento siempre activado, el evaluador admite llamadas
reales mediante la API oficial, usando `CLOUDFLARE_ACCOUNT_ID` y
`CLOUDFLARE_API_TOKEN` ya presentes en el entorno:

```sh
node workers/notes-tutor/tools/evaluate-reasoning.mjs --live --case=water --repeat=3
```

Esta opción sí consume cuota. No guarda credenciales ni las imprime. Alterna el
orden de los modos en las repeticiones y usa los mismos mensajes y límite de
tokens. En los casos complejos ambos modos activan el razonamiento: se reutiliza
una única inferencia por repetición. La salida contiene respuestas sintéticas,
referencias para revisarlas y mediciones; no puntúa automáticamente su precisión.
El tiempo de red de esta prueba procede de la máquina que la ejecuta, por lo que
no debe mezclarse con los tiempos de producción del Worker.

Revisa cada respuesta frente al criterio del caso y compara varias repeticiones.
La prueba `acid-numeric` debe dar un pH aproximado de 2,88 y `ice-numeric` unas
concentraciones de 0,222 M para H₂ e I₂ y 1,556 M para HI. Si alguna explicación
del modo rápido pierde precisión, añade el caso a las pruebas y ajusta la regla
afectada. La mejora real de TTFT y la precisión del modelo requieren esta
evaluación después de desplegar; las pruebas simuladas no las demuestran.

Referencias: [Workers AI bindings](https://developers.cloudflare.com/workers-ai/configuration/bindings/),
[cuota y facturación](https://developers.cloudflare.com/workers-ai/platform/pricing/),
[configuración de Gemma](https://developers.cloudflare.com/workers-ai/get-started/workers-wrangler/),
[Workers Logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/),
[limitador de peticiones](https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/).
