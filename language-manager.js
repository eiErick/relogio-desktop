const time = document.querySelectorAll(".time");
const titleWin = document.querySelector(".title-win");

const language = navigator.language;
let currentLanguage = "en"; // "en" or "pt-br"

if (navigator.language.toUpperCase() === "pt-br".toUpperCase()) {
  currentLanguage = "pt-br";
}

function loadLanguage() {
  fetch(`language/${currentLanguage}.json`)
    .then(res => res.json())
    .then(data => {
      titleWin.innerText = data.title;
      time[0].innerText = data.hours;
      time[1].innerText = data.minutes;
      time[2].innerText = data.seconds;
    });
}

loadLanguage();
