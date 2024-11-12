const display = document.getElementById("display");
let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

function start() {
  if (!isRunning) {
    startTime = Date.now() - elapsedTime; //gives in milli seconds from satrt date i.e 1970
    timer = setInterval(update, 10);
    isRunning = true;
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    elapsedTime = Date.now() - startTime;
    isRunning = false;
  }
}

function reset() {
  clearInterval(timer);
  startTime = 0;
  elapsedTime = 0;
  isRunning = false;
  display.textContent = "00:00:00:00"
}

function update() {
  const currentTime = Date.now();//gives in milli seconds from satrt date i.e 1970

  elapsedTime = currentTime - startTime;

  let hours = Math.floor(elapsedTime / (1000 * 60 * 60));//to convert milliseconds to hours == 1000= ms, 60= seconds, 60 =minutes.
  let minutes = Math.floor(elapsedTime / (1000 * 60) % 60);//to convert milliseconds to minutes ( % 60) is for after 59 seconds next second = 00
  let seconds = Math.floor(elapsedTime / (1000) % 60);
  let milliseconds = Math.floor(elapsedTime % 1000 / 10);//ms is four digits to reduce it to 2 digits (/10);

  hours = String(hours).padStart(2, "0");
  minutes = String(minutes).padStart(2, "0");
  seconds = String(seconds).padStart(2, "0");
  milliseconds = String(milliseconds).padStart(2, "0");

  display.textContent = `${hours}:${minutes}:${seconds}:${milliseconds}`
}