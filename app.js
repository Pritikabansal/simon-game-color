let cross = document.querySelector('i');
let instr = document.querySelector('.instrunction');

let h3 = document.querySelector('h2');
let h4 = document.querySelector('h3');
let userseq = [];
let gameseq = [];
let higestScore = [];

let btns = ['red', 'yellow', 'blue', 'green'];
let startGame = false;
let level = 0;

// touchstart event--->>>
document.addEventListener('touchstart',function(){
    if (startGame == false) {
        console.log("game started");
        startGame = true;
        levelup();
    }
})

// keypress event--->>>
document.addEventListener('keypress', function () {
    if (startGame == false) {
        console.log("game started");
        startGame = true;
        levelup();
    }
});

// flashing box of color white--->>>
function flashbtn(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove('flash');
    }, 250);
}

// flashing box when user press ,black color--->>>
function userFlashbtn(btn) {
    btn.classList.add("unflash");
    setTimeout(function () {
        btn.classList.remove('unflash');
    }, 250);
}

function levelup() {
    userseq = [];
    level++;
    h3.innerText = `level : ${level}`;

    let randIndx = Math.floor(Math.random() * 4);
    console.log(randIndx);
    let randcolor = btns[randIndx];
    let randbtn = document.querySelector(`.${randcolor}`);
    gameseq.push(randcolor);
    console.log(gameseq);
    flashbtn(randbtn);
}

// cheching that game and user have the same sequence--->>>
function checkseq(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length == gameseq.length) {
            setTimeout(levelup, 1000);
        }
    } else {
        h3.innerHTML = `Game Over!! <b> Your score was ${level} </b> <br> Tap/Press any key to start again`;
        h4.innerHTML = `Highest Score : <b> ${score()} </b>`;
        reset();

    }
}

// storing userpress button color in an array--->>>
function btnpress() {
    let btn = this;
    userFlashbtn(btn);

    userColor = btn.getAttribute('id');
    userseq.push(userColor);

    checkseq(userseq.length - 1);
}

let allbtns = document.querySelectorAll('.box');
for (btn of allbtns) {
    btn.addEventListener('click', btnpress);
}

// calculating highest score--->>>
function score() {
    higestScore.push(level);
    console.log(higestScore);
    let ss = higestScore[0];
    let i = 0;
    while (i <= higestScore.length) {
        if (ss < higestScore[i]) {
            ss = higestScore[i];
        }
        i++;
    }
    return ss;
}

// reset eveything when user start again--->>>
function reset() {
    userseq = [];
    gameseq = [];
    level = 0;
    startGame = false;
}

cross.addEventListener('click',function(){
    instr.classList.add('close');
})
