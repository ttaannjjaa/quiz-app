export function tagTest() {
  const createPageSubmitButton = document.querySelector('[data-submit="createpage"]');
  createPageSubmitButton.addEventListener('click', () => {
    console.log('first step');
    tagProduction();
  });

  function tagProduction() {
    let tag1 = document.querySelector('[data-card = "tag1"]');
    let tag2 = document.querySelector('[data-card = "tag2"]');
    let tag3 = document.querySelector('[data-card = "tag3"]');
    let tag4 = document.querySelector('[data-card = "tag4"]');

    const fieldUserInputTags = document.querySelector('[data-input="tagsforcard"]');
    const userInputTagsString = fieldUserInputTags.value;
    const userInputTagsAsArrayRaw = userInputTagsString.split(',');
    console.log(userInputTagsAsArrayRaw);
    const arrayTagsCleaned = userInputTagsAsArrayRaw.map(tag => tag.trim());
    console.log(arrayTagsCleaned);

    const tag1Input = arrayTagsCleaned[0];
    const tag2Input = arrayTagsCleaned[1];
    const tag3Input = arrayTagsCleaned[2];
    const tag4Input = arrayTagsCleaned[3];

    console.log(tag1Input, tag2Input, tag3Input, tag4Input);

    tag1.textContent = tag1Input;
    tag2.textContent = tag2Input;
    tag3.textContent = tag3Input;
    tag4.textContent = tag4Input;
  }
  // tags producing from form tagfield
  // data incoming as a string, divided by commas (hopefully) -> ???? building a check function for the input ????
  // corresponding exercise: codepen split() and join()
}
