export default function Card(cardElement) {
  const cardBookmark = cardElement.querySelector('[data-js="bookmark-toggle"]');

  cardBookmark.addEventListener('click', () => {
    cardBookmark.classList.toggle('app-card__bookmark--activated');
  });
}
