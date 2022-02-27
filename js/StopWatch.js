let watch = document.getElementById('watch');
let milliseconds = document.getElementById('millisecond');
let seconds = document.getElementById('second');
let minutes = document.getElementById('minute')
let startBtn = document.getElementById('startBtn');
let stopBtn = document.getElementById('stopBtn');
let Restart = document.getElementById('restartBtn');

stopBtn.style.display='none';
Restart.style.display='none';





startBtn.addEventListener('click', () => {

  let millisecond = 1;
  let second = 1;
  let minute = 1;

  setInterval(() => {


    if (minute < 10) {
      minute = `0${minute}`;

    }

    minutes.innerHTML = minute;
    minute++;

  }, 60000);

  setInterval(() => {

    if (second > 60) {

      second = second - 60;

    }
    if (second < 10) {
      second = `0${second}`;

    }
    seconds.innerHTML = second;
    second++;



  }, 1000);

  setInterval(() => {

    if (millisecond > 10) {

      millisecond = millisecond - 10;
    }

    if (millisecond < 10) {
      millisecond = `0${millisecond}`;

    }
    milliseconds.innerHTML = millisecond;
    millisecond++;


  }, 100);
stopBtn.style.display='block';
Restart.style.display='block';
startBtn.style.display='none';


})

Restart.addEventListener('click', () => {
  location.reload();
})

stopBtn.addEventListener('click', () => {
  let mtext = minutes.innerText;
  let stext = seconds.innerText;
  let mltext = milliseconds.innerText;
  
  watch.innerHTML = `${mtext}:${stext}:${mltext}`;

})