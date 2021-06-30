const horse = document.querySelector('.animation');
const img = document.getElementsByTagName('img');
const img2 = document.getElementById('img');
const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const btnBird = document.querySelector('#btnBird');
const btnHorse = document.querySelector('#btnHorse');
const screens = document.querySelectorAll('.screen');
const btnPrev = document.querySelector('#btnPrev');
let count = 1;
let timer = null;
let horseCount = null;
let birdCount = null;


btnBird.addEventListener('click', () => {
    screens[0].style.marginTop = "-100vh";
    img2.setAttribute('src', `imgBird/bird${count}.png`);
    img2.style.width = '130px';
    birdCount = true;
    horseCount = false;

})

btnHorse.addEventListener('click', () => {
    screens[0].style.marginTop = "-100vh";
    img2.setAttribute('src', `img/horse${count}.png`);
    img2.style.width = '150px';
    horseCount = true;
    birdCount = false;
})

btnPrev.addEventListener('click', () => {
    screens[0].style.marginTop = "0";
    stop();
})

btnStart.addEventListener('click', start);

btnStop.addEventListener('click', stop);


function start() {
   timer = setInterval(() => {
       if (birdCount) {
        img2.setAttribute('src', `imgBird/bird${count}.png`)
        if (count == 10) {
            count = 1;
        }
        count++;
        // img2.style.width = '130px';
       } else if (horseCount) {
        img2.setAttribute('src', `img/horse${count}.png`)
           if (count == 8) {
               count = 1;
           }
           count++;
        //    img2.style.width = '150px';
       }
    }, 80)
    btnStart.style.visibility = "hidden";
    img2.style.display = "block";
}

function stop() {
    clearInterval(timer);
    btnStart.style.visibility = "visible";
    img2.style.display = "none";
    count = 1;
}