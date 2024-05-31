const time = document.querySelectorAll('.time');
const titleWin = document.querySelector('.title-win');
const headerOptionClock = document.querySelector('#header-option-clock');
const headerOptionStopwatch = document.querySelector('#header-option-stopwatch');
const stopwatchBtnStartStop = document.querySelector('#stopwatch-btn-start-stop');
const stopwatchBtnReset = document.querySelector('#stopwatch-btn-reset');

const language = navigator.language;
let currentLanguage = 'en'; // 'en' or 'pt-br'

if (navigator.language.toUpperCase() === 'pt-br'.toUpperCase()) {
  currentLanguage = 'pt-br';
}

function loadLanguage() {
  fetch(`language/${currentLanguage}.json`)
    .then(res => res.json())
    .then(data => {
      titleWin.innerText = data.title;
      time[0].innerText = data.hours;
      time[1].innerText = data.minutes;
      time[2].innerText = data.seconds;
      headerOptionClock.innerText = data.headerOptionClock;
      headerOptionStopwatch.innerText = data.headerOptionStopwatch;
      stopwatchBtnStartStop.innerText = data.stopwatchBtnStart;
      stopwatchBtnReset.innerText = data.stopwatchBtnReset;
    });
}

loadLanguage();
