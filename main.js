function preload(){

}

function setup(){
    canvas = createCanvas(660, 520);
    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    //Circles
    fill('red');
    circle(50, 55, 100);
    circle(50, 470, 100);
    circle(610, 55, 100);
    circle(610, 470, 100);

    //Rectangles
    fill('green');
    square(97.5, 35, 465, 35);
    square(97.5, 455, 465, 35);
    square(32.5, 101, 35, 322.5);
    square(592.5, 101, 35, 322.5);

    //Video
    image(video, 145, 120, 375, 280);
}

function takeSnapshot(){
    save('My-Photo-Frame.png');
}