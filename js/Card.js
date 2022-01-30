export default function Card(cardElement) {
  const cardBookmark = cardElement.querySelector('[data-js="bookmark-toggle"]');

  cardBookmark.addEventListener('click', () => {
    cardBookmark.classList.toggle('app-card__bookmark--activated');
  });

  const summaryButton = cardElement.querySelector(
    '[data-js="showanswer-button"]'
  );
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
