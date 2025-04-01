function displayPoem(response) {
  new Typewriter("#lyrics", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "2046c535afeb092fo82f1d306d8a2b2t";
  let context =
    "You are a music connoiser  and love to write beautiful RnB MUSIC. You mission is to generate  RnB lyrics written the musical artist given in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Make sure to include  a title to all the lyrics you generate. Sign the SONG  with 'SheCodes AI' inside a <strong> element at the end of the poem and NOT at the beginning";
  let prompt = `User instructions: Generate a english Rnb song lyrics  about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#lyrics");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a RnB song lyrics written by  ${instructionsInput.value}</div>`;
  axios.get(apiURL).then(displayPoem);
}

let poemFormElement = document.querySelector("#lyrics-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
