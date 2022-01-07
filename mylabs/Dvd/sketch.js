let dvd;
let dvdImg;

function preload() {
    dvdImg = loadImage('assets/dvd.jpg');
}
function setup(){
    createCanvas(500,500);
    dvd = new DVD (200,240,0,0,20,0,255,255);
}

function draw(){
    background(0,0,0);

    dvd.step();
    dvd.render();
}

function keyPressed(){
    if (keyCode === LEFT_ARROW) {
        dvd.acceleratedvd(-0.5,0);
    }
    else if (keyCode === RIGHT_ARROW) {
        dvd.acceleratedvd(0.5,0);
    }
    else if (keyCode === UP_ARROW) {
        dvd.acceleratedvd(0,-0.5);
    }
    else if (keyCode === DOWN_ARROW) {
        dvd.acceleratedvd(0,0.5);
    }
}