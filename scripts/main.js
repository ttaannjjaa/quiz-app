const cardBookmark = document.querySelector('[data-js="bookmark-toggle"]');

cardBookmark.addEventListener("click", () => {
  cardBookmark.classList.toggle("quiz-app-card__bookmark--not-activated");
});
