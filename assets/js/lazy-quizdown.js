import {url, integrity, options, eagerFirst} from '@params';

let library;

function loadQuizdown() {
  return library ??= new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = url;
    script.integrity = integrity;
    script.crossOrigin = 'anonymous';
    script.onload = () => resolve(window.quizdown);
    script.onerror = () => {
      script.remove();
      reject(new Error('Could not load Quizdown'));
    };
    document.head.append(script);
  }).catch(error => {
    library = undefined;
    throw error;
  });
}

async function renderQuiz(quiz) {
  try {
    const quizdown = await loadQuizdown();
    quizdown.createApp(quiz.firstElementChild.innerHTML, quiz, options);
  } catch (error) {
    console.warn('Quizdown unavailable', error);
  } finally {
    quiz.removeAttribute('data-quizdown-pending');
  }
}

const quizzes = [...document.querySelectorAll('[data-quizdown-pending]')];
if (eagerFirst && quizzes.length) renderQuiz(quizzes.shift());

if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => {
    for (const {target, isIntersecting} of entries) {
      if (!isIntersecting) continue;
      observer.unobserve(target);
      renderQuiz(target);
    }
  }, {rootMargin: '300px 0px'});
  quizzes.forEach(quiz => observer.observe(quiz));
} else {
  quizzes.forEach(renderQuiz);
}
