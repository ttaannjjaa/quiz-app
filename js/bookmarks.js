export function bookmarks() {
  const cardBookmark = document.querySelector('[data-js="bookmark-toggle"]');

  cardBookmark.addEventListener('click', () => {
    cardBookmark.classList.toggle('app-card__bookmark--activated');
  });
}
