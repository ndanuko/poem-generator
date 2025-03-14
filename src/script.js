function generateLyric(event) {
  event.preventDefault();
  new Typewriter("#lyrics", {
    strings: "I wanna get lost in you",
    autoStart: true,
    delay: 1,
  });
}
let lyricFormElement = document.querySelector("#lyrics-generator-form");
lyricFormElement.addEventListener("submit", generateLyric);
