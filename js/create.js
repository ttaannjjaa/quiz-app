export default function Counter() {
  const inputTextfieldQuestion = document.querySelector('[data-input="createpage__textarea1"]');
  let outputCounterQuestion = document.querySelector('[data-js="output-counter1"]');

  inputTextfieldQuestion.addEventListener('input', () => {
    outputCounterQuestion.value = inputTextfieldQuestion.value.length;
    if (inputTextfieldQuestion.value.length === 180) {
      //alert(`sorry ${username}, there is no text space remaining`);

      alert(`sorry, no text space left`);
    }
  });

  // zweite Textarea

  const inputTextfieldAnswer = document.querySelector('[data-js="createpage__textarea2"]');
  let outputCounterAnswer = document.querySelector('[data-js="output-counter2"]');

  if (inputTextfieldAnswer.value.length < 351) {
    inputTextfieldAnswer.addEventListener('input', () => {
      outputCounterAnswer.value = inputTextfieldAnswer.value.length;
    });
  }

  if (outputCounterAnswer.textContent == 350) {
    inputTextfieldAnswer.addEventListener('input', () => {
      outputCounterAnswer.value = inputTextfieldAnswer.value.length;

      //alert(`sorry ${username}, there is no text space remaining`);
      console.log('else-Strang');
    });
  }
}

// test

//   const inputTextfieldAnswer = document.querySelector(
//     '[data-js="createpage__input--textarea2"]'
//   );
//   let outputCounterAnswer = document.querySelector(
//     '[data-js="output-counter2"]'
//   );

//   if (inputTextfieldAnswer.value.length < 301) {
//     inputTextfieldAnswer.addEventListener('input', () => {
//       outputCounterAnswer.value = inputTextfieldAnswer.value.length;
//     });
//     if (outputCounterAnswer.value == '300') {
//       //alert(`sorry ${username}, there is no text space remaining`);
//       console.log('else-Strang');
//     }
//   }
// }
