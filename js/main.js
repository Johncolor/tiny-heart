var can1;
var can2;

var ctx1;
var ctx2;

var canWidth;
var canHeight;

var ane;
var fruit;

var mom;
var baby;

var mx;
var my;

var lastTime;
var dalteTime;

var babyTail = [];
var babyEye = [];
var babyBody = [];

var momTail = [];
var momEye = [];
var momBodyOra = [];
var momBodyBlue = [];

var data;

var wave;
var helo;


var dust;
var dustPic = [];

var bgPic = new Image();
window.onload = game;
function game() {
    init();
    lastTime = Date.now();
    dalteTime = 0;
    gameloop();
}
function init() {
    //获得canvas context
    can1 = document.getElementById("canvas1");//fishes,dust,UI,circle
    ctx1 = can1.getContext("2d");
    can2 = document.getElementById('canvas2');//background,one,fruits
    ctx2 = can2.getContext("2d");

    can1.addEventListener('mousemove', onMouseMove, false);

    bgPic.src = './src/background.jpg';

    canWidth = can1.width;
    canHeight = can1.height;

    ane = new aneObj();
    ane.init();

    fruit = new fruitObj();
    fruit.init();

    mom = new momObj();
    mom.init();

    baby = new babyObj();
    baby.init();

    mx = canWidth * 0.5;
    my = canHeight * 0.5;

    for (var i = 0; i < 8; i++) {
        babyTail[i] = new Image();
        babyTail[i].src = './src/babyTail' + i + '.png';
    }
    for (var i = 0; i < 2; i++) {
        babyEye[i] = new Image();
        babyEye[i].src = './src/babyEye' + i + '.png';
    }
    for (var i = 0; i < 20; i++) {
        babyBody[i] = new Image();
        babyBody[i].src = './src/babyFade' + i + '.png';
    }

    for (var i = 0; i < 8; i++) {
        momTail[i] = new Image();
        momTail[i].src = './src/bigTail' + i + '.png';
    }
    for (var i = 0; i < 2; i++) {
        momEye[i] = new Image();
        momEye[i].src = './src/bigEye' + i + '.png';
    }
    for(var i = 0; i <8;i++){
        momBodyOra[i] = new Image();
        momBodyBlue[i] = new Image();
        momBodyOra[i].src = './src/bigSwim' + i + '.png';
        momBodyBlue[i].src = './src/bigSwimBlue' + i + '.png';
    }

    data = new dataObj();

    ctx1.font = '30px Verdana';
    ctx1.textAlign = 'center';

    wave = new waveObj();
    wave.init();

    helo = new heloObj();
    helo.init();

    for(var i = 0;i < 7;i ++){
        dustPic[i] = new Image();
        dustPic[i].src = './src/dust' + i + '.png';
    }

    dust = new dustObj();
    dust.init();

}
function gameloop() {
    window.requestAnimFrame(gameloop);//setInterval,setTimeout,frame per second
    var now = Date.now();
    dalteTime = now - lastTime;
    lastTime = now;
    if (dalteTime > 40) {
        dalteTime = 40;
    }
    drawBackground();
    ane.draw();
    fruitMonitor();
    fruit.draw();

    ctx1.clearRect(0, 0, canWidth, canHeight);
    mom.draw();
    baby.draw();
    momFruitsCollision();
    momBabyCollision();

    data.draw();
    wave.draw();
    helo.draw();
    dust.draw();
}
function drawBackground(){
    ctx2.drawImage(bgPic,0,0,canWidth,canHeight);
}
function onMouseMove(e) {
    if(!data.gameOver) {
        if (e.offsetX || e.layerX) {
            mx = e.offsetX == undefined ? e.layerX : e.offsetX;
            my = e.offsetY == undefined ? e.layerY : e.offsetY;
        }
    }
}