const headerOptions = document.querySelectorAll('.header-option');

const clock = document.querySelector('.clock');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');

const stopwatch = document.querySelector('.stopwatch');
const display = document.querySelector('#stopwatch-display');
const btnStartStop = document.querySelector('#stopwatch-btn-start-stop');
const btnReset = document.querySelector('#stopwatch-btn-reset');
const showHours = document.querySelector('#stopwatch-show-hours');
const showMinutes = document.querySelector('#stopwatch-show-minutes');

headerOptions.forEach((option) => {
    option.addEventListener('click', () => {
        headerOptions.forEach((option) => {
            if (option.classList[1] === 'selected') option.classList.remove('selected');
        });
        option.classList.add('selected');

        const selected = document.querySelector('.selected');

        if (selected.dataset.option === 'clock') {
            clock.style.display = 'flex';
            stopwatch.style.display = 'none';
        }

        if (selected.dataset.option === 'stopwatch') {
            stopwatch.style.display = 'flex';
            clock.style.display = 'none';
        }
    });
});

const relogio = setInterval(function time() {
    let dateToday = new Date();
    let h = dateToday.getHours();
    let m = dateToday.getMinutes();
    let s = dateToday.getSeconds();

    if (h < 10) h = '0' + h;
    if (m < 10) m = '0' + m;
    if (s < 10) s = '0' + s;

    hours.textContent = h;
    minutes.textContent = m;
    seconds.textContent = s;
});

let stopwatchMiliseconds = 0;
let stopwatchSeconds = 0 + '0';
let stopwatchMinutes = 0 + '0';
let stopwatchHours = 0 + '0';

showTime();

btnStartStop.addEventListener('click', () => {
    btnStartStop.dataset.state === 'running' ? stopWatch() : startWatch();
});

btnReset.addEventListener('click', () => {
    stopwatchMiliseconds = 0;
    resetWatch();
    showTime();
});

function stopWatch() {
    intervaloId = clearInterval(intervaloId);
    btnStartStop.dataset.state = 'paused';
    fetch(`language/${currentLanguage}.json`).then(res => res.json()).then(data => {stopwatchBtnStartStop.innerText = data.stopwatchBtnStart});
}

function startWatch() {
    intervaloId = setInterval(count, 100);
    btnStartStop.dataset.state = 'running';
    fetch(`language/${currentLanguage}.json`).then(res => res.json()).then(data => {stopwatchBtnStartStop.innerText = data.stopwatchBtnStop});
}

function resetWatch() {
    stopwatchMiliseconds = 0;
    stopwatchSeconds = 0 + '0';
    stopwatchMinutes = 0 + '0';
    stopwatchHours = 0 + '0';

    showHours.innerHTML = '';
    showMinutes.innerHTML = '';
}

const count = () => {
    stopwatchMiliseconds++;
    showTime();
}

function showTime() {
    if (stopwatchMiliseconds == 10) transformSeconds();
    if (stopwatchSeconds == 60) transformMinutes();
    if (stopwatchMinutes == 60) transformHours();

    display.innerHTML = `${stopwatchSeconds}.${stopwatchMiliseconds}`;
}

function transformSeconds() {
    stopwatchMiliseconds = 0;
    stopwatchSeconds++;

    if (stopwatchSeconds < 10) stopwatchSeconds = '0' + stopwatchSeconds;
}

function transformMinutes() {
    stopwatchSeconds = 0 + '0';
    stopwatchMinutes++;

    if (stopwatchMinutes < 10) stopwatchMinutes = '0' + stopwatchMinutes;

    showMinutes.innerHTML = `${stopwatchMinutes}:`
}

function transformHours() {
    stopwatchMinutes = 0 + '0';
    stopwatchHours++;

    if (stopwatchHours < 10) stopwatchHours = '0' + stopwatchHours;
    
    showMinutes.innerHTML = `${stopwatchMinutes}:`
    showHours.innerHTML = `${stopwatchHours}:`
}
