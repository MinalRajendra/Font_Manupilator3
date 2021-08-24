leftX=0;
rightX=0;
difference=0;


function setup(){
    video=createCapture(VIDEO);
    video.size(550,500);
    canvas=createCanvas(550,550);
    canvas.position(560,150);
poseNet=ml5.poseNet(video,modelloaded);
poseNet.on('pose',gotposes);
}

function modelloaded(){
    console.log("model is loaded");
}

function gotposes(results){
if(results.length>0){
leftX=results[0].pose.leftWrist.x;
rightX=results[0].pose.rightWrist.x;
difference=floor(leftX-rightX);
}
}

function draw(){
    background('#6cf0f5');
    textSize(difference);
    fill('#6e22bf');
    text('Space',50,400);
}