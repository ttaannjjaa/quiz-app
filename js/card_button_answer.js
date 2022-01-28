export function buttonAnswer() {
  const summaryButton = document.querySelector('[data-js="showanswer-button"]');
  const textHide = 'hide answer';
  const textShow = 'show answer';

  summaryButton.addEventListener('click', () => {
    if (summaryButton.textContent.trim() === textShow) {
      summaryButton.textContent = textHide;
      summaryButton.classList.add('app-card-action--on');
    } else {
      summaryButton.classList.remove('app-card-action--on');
      summaryButton.textContent = 'show answer';
    }
  });
}
