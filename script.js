let x,y;
let xspeed,yspeed;
let dvd;
let r,g,b;

function preload(){
    dvd=loadImage('dvd_logo.png');
}

function changeColor(){
    r=random(100,256);
    g=random(100,256);
    b=random(100,256);
}

function setup(){
    createCanvas(windowWidth, windowheight);
    x=random(width);
    y=random(height);
    xspeed=yspeed=10;
    changeColor();
}

function draw(){
    background(0);
    tint(r,g,b);
    image(dvd,x,y);
    x+=xspeed;
    y+=yspeed;

    if(x + dvd.width >= width){
        xspeed*=-1;
        x = width-dvd.width;
        changeColor();
    }
    else if(x<=0){
        xspeed*=-1;
        x=0;
        changeColor();
    }

    if(y + dvd.height >= height){
        yspeed*=-1;
        y = height-dvd.height;
        changeColor();
    }
    else if(y<=0){
        yspeed*=-1;
        y=0;
        changeColor();
    }
}
