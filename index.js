import Nav from './js/Nav.js';

Nav();
let userName = '';
const userNameField = document.querySelector('[data-js="username"]');
userName = userNameField.value;
console.log(userName);

// import { bookmarks } from './js/bookmarks.js';

// bookmarks();

// import { buttonAnswer } from './js/card_button_answer.js';

// buttonAnswer();

//import Counter from './js/create.js';

// Counter();

import Card from './js/Card.js';

const allCardElements = document.querySelectorAll('[data-js="app-card"]');
allCardElements.forEach(cardElement => {
  Card(cardElement);
});

//import { tagTest } from './js/card_production_self.js';

//tagTest();

import { cardProductionComplete } from './js/card_production_infinity.js';
cardProductionComplete();
