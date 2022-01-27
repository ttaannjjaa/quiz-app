// //logout button - input field  :-((  //

// const logoutbtn = document.querySelector('[data-js="logoutbutton"]');
// const inputusername = document.querySelector('.js-input-username');

// logoutbtn.addEventListener('click', () => {
//   const bye = 'Ciao, user! Log in again!';
//   const hello = 'Hello, user! Nice to see you';
//   inputusername.value = bye;
//   logoutbtn.classList.toggle('profile__button--loggedout');
// });

//bookmark// // nur der erste auf der Seite funktioniert //
const cardBookmark = document.querySelector('[data-js="bookmark-toggle"]');

cardBookmark.addEventListener('click', () => {
  cardBookmark.classList.toggle('app-card__bookmark--not-activated');
});

//show-hide answer on quiz-card -
//Lösung MDN Events im details Artikel - funktioniert nicht!

const summaryButton = document.querySelector('[data-js="showanswer-button"]');
const textHide = 'hide answer';
const textShow = 'show answer';

// summaryButton.addEventListener('toggle', event => {
//   if (summaryButton.opened) {
//     summaryButton.textContent.trim() = textHide;
//     summaryButton.classList.add('app-card-action--on');
//   } else {
//     summaryButton.textContent = textShow;
//     summaryButton.classList.remove('app-card-action--on');
//   }
// });

//Lösung funktioniert für den ButtonStyle, aber weiterhin nicht auf den ersten Klick,
//das automatische Ausklappen des Antworttextes ist durch eventprevent unterdrückt;

// summaryButton.addEventListener(
//   'click',
//   function (event) {
//     if (summaryButton.textContent === textShow) {
//       event.preventDefault();
//       summaryButton.textContent = textHide;
//       summaryButton.classList.add('app-card-action--on');
//          console.log('if strang');
//     } else {
//       event.preventDefault();
//       summaryButton.classList.remove('app-card-action--on');
//       summaryButton.textContent = 'show answer';
//          console.log('else strang');
//     }
//   },
//   false
// );

//Ternary Code - Fabian - funktioniert nicht auf den ersten Klick, Ereignisse nicht synchron

// const showAnswerButton = document.querySelector(
//   '[data-js="showanswer-button"]'
// );
// const textHide = 'hide answer';
// const textShow = 'show answer';

// showAnswerButton?.addEventListener('click', () => {
//   // ternary operator
//   showAnswerButton.textContent =
//     showAnswerButton.textContent === textShow ? textHide : textShow;
// });

summaryButton.addEventListener('click', () => {
  if (summaryButton.textContent.trim() === textShow) {
    summaryButton.textContent = textHide;
    summaryButton.classList.add('app-card-action--on');
  } else {
    summaryButton.classList.remove('app-card-action--on');
    summaryButton.textContent = 'show answer';
  }
});
