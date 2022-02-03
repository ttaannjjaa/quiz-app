export function cardProductionComplete() {
  const cardsContainer = document.querySelector('[data-cardstore="startpage"]'); //ul in index.html
  const formCreatePage = document.querySelector('[data-form="createpage"]'); //komplettes Formular Createpage
  const createPageSubmitButton = document.querySelector('[data-submit="createpage"]');

  console.log(formCreatePage);
  console.log(cardsContainer);

  let cards = [];

  createPageSubmitButton.addEventListener('click', () => {
    //event.preventDefault(); // ruft im DOM return false auf, so dass ein Drücken der return Taste nicht schon das ganze Formular abschickt

    //const questionInput = form.elements.newquestion;
    //const answerInput = formCreatePage.Element.newanswer;

    const questionInput = document.querySelector('[data-input="createpage__textarea1"]');
    const answerInput = document.querySelector('[data-input="createpage__textarea2"]');
    const tagsInput = document.querySelector('[data-input="tagsforcard"]');

    let tag1 = document.querySelector('[data-card = "tag1"]');
    let tag2 = document.querySelector('[data-card = "tag2"]');
    let tag3 = document.querySelector('[data-card = "tag3"]');
    let tag4 = document.querySelector('[data-card = "tag4"]');

    const newCard = {
      question: questionInput.value,
      answer: answerInput.value,
      tags: tagsInput.value
        .split(',')
        .map(tag => tag.trim())
        .filter(tag => tag.length)
        .slice(0, 4),
    };

    cards = [newCard, ...cards]; //Karte wird als erste vor allen vorhandenen Karten hinzugefügt
    renderCards(); //eigene Funktion zur Kartenanzeige, die HTML und CSS enthält

    formCreatePage.reset();
    questionInput.focus();
  }); // Ende Eventlistener

  function renderCards() {
    cardsContainer.innerHTML = ''; //leert den Stock Karten, um keine Dupletten zu erzeugen

    cards.forEach(card => {
      //array cards
      const cardElement = document.createElement('li');
      cardElement.className = 'app-card';
      cardElement.innerHTML = `
      <section app-card data-js="app-card">
      <button data-js="bookmark-toggle" class="app-card__bookmark shadow">
        <img src="../images/icons8-bookmark.svg" alt="bookmark icon" width="30" height="30" />
      </button>
      <h2 class="app-card__heading">Question:</h2>
      <article class="app-card-question-container">
        <p class="app-card-question">${card.question}
        </p>
        <details class="app-card-action">
          <summary class="app-card-action--off shadow--bottom" data-js="showanswer-button">
            show answer
          </summary>${card.answer}
        </details>
      </article>

      <div class="quiz-app-card-advise-tag__container">
        <button class="quiz-app-card-advise-tag shadow" type="button" data-card="tag1">
        ${card.tags[0]}
        </button>
        <button class="quiz-app-card-advise-tag shadow" type="button" data-card="tag2">
        ${card.tags[1]}
        </button>
        <button class="quiz-app-card-advise-tag shadow" type="button" data-card="tag3">
        ${card.tags[2]}
        </button>
        <button class="quiz-app-card-advise-tag shadow" type="button" data-card="tag4">
        ${card.tags[3]}
        </button>
      </div>
    </section>

    </ul>
  `;
      cardsContainer.append(cardElement);
    });
  }
}
