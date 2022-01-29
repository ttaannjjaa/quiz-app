export default function Counter() {
  const inputTextfieldQuestion = document.querySelector(
    '[data-js="createpage__input--textarea1"]'
  );
  let outputCounterQuestion = document.querySelector(
    '[data-js="output-counter1"]'
  );

  if (inputTextfieldQuestion.value.length < 181) {
    inputTextfieldQuestion.addEventListener('input', () => {
      outputCounterQuestion.value = inputTextfieldQuestion.value.length;
    });
  }
  if (outputCounterQuestion.textContent == '180') {
    //alert(`sorry ${username}, there is no text space remaining`);
    console.log('else-Strang');
    //alert('Hello World');
  }

  const inputTextfieldAnswer = document.querySelector(
    '[data-js="createpage__input--textarea2"]'
  );
  let outputCounterAnswer = document.querySelector(
    '[data-js="output-counter2"]'
  );

  if (inputTextfieldAnswer.value.length < 301) {
    inputTextfieldAnswer.addEventListener('input', () => {
      outputCounterAnswer.value = inputTextfieldAnswer.value.length;
    });
  }
  if (outputCounterAnswer.value == '300') {
    //alert(`sorry ${username}, there is no text space remaining`);
    console.log('else-Strang');
    //alert('Hello World');
  }
}
