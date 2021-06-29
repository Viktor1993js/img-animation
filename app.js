const horse = document.querySelector('.animation');
const anim = document.querySelector('#horse');
const img = document.getElementsByTagName('img');
const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
let count = 0;
let timer = null;

btnStart.addEventListener('click', start);
btnStop.addEventListener('click', stop);


function start() {
   timer = setInterval(() => {
        anim.style.backgroundImage = `url('img/horse${count}.png')`;
        if (count == img.length) {
            count = 0;
        }
        count++;
    }, 80)
    btnStart.style.visibility = "hidden";
}

function stop() {
    clearInterval(timer);
    btnStart.style.visibility = "visible";
}