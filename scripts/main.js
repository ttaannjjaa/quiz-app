//logout button - input field  :-((  //

const logoutbtn = document.querySelector('[data-js="logoutbutton"]');
const inputusername = document.querySelector('.js-input-username');
const loginbtn = document.querySelector('[data-js="loginbutton"]');

logoutbtn.addEventListener('click', () => {
  const bye = 'Ciao, user! Log in again!';
  inputusername.value = bye;
  logoutbtn.classList.add('profile__button--loggedout');
});

loginbtn.addEventListener('click', () => {
  const hello = 'Hello, user! Nice to see you.';
  inputusername.value = hello;
  logoutbtn.classList.remove('profile__button--loggedout');
});

//bookmark//

const cardBookmark = document.querySelector('[data-js="bookmark-toggle"]');

cardBookmark.addEventListener('click', () => {
  cardBookmark.classList.toggle('quiz-app-card__bookmark--not-activated');
});
