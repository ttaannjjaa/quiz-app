//logout button - input field  :-((  //

const logoutbtn = document.querySelector('[data-js="logoutbutton"]');
const inputusername = document.querySelector('.js-input-username');

logoutbtn.addEventListener('click', () => {
  const bye = 'Ciao, user! Log in again!';
  const hello = 'Hello, user! Nice to see you';
  inputusername.value = bye;
  logoutbtn.classList.toggle('profile__button--loggedout');
});

//bookmark// // nur der erste auf der Seite funktioniert //

const cardBookmark = document.querySelector('[data-js="bookmark-toggle"]');

cardBookmark.addEventListener('click', () => {
  cardBookmark.classList.toggle('quiz-app-card__bookmark--not-activated');
});
