import Nav from './js/Nav.js';

Nav();

import { counter } from './js/create.js';

counter();

import Card from './js/Card.js';

const allCardElements = document.querySelectorAll('[data-js="app-card"]');
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

import { cardProductionComplete } from './js/card_production_infinity.js';
cardProductionComplete();

// import { bookmarks } from './js/bookmarks.js';

// bookmarks();

// import { buttonAnswer } from './js/card_button_answer.js';

// buttonAnswer();

//import { tagTest } from './js/card_production_self.js';

//tagTest();

// let userName = '';
// const userNameField = document.querySelector('[data-js="username"]');
// userName = userNameField.value;
// console.log(userName);
