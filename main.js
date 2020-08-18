var song = "";
var leftWristY = 0;
var rightWristY = 0;
function setup(){
canvas = createCanvas(600,500);
canvas.center();
video = createCapture(VIDEO);
video.hide();


poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose',getPoses)
}
function draw(){
    image(video,0,0,600,500)
}
function preload(){
    song = loadSound("music.mp3");
}
function play(){
    song.play();
    song.rate(1);
    song.setVolume(1);
};
function modelLoaded(){
    console.log("PoseNet is initialized!")
}
function getPoses(results){
    if(results.length > 0){
    console.log(results);
     leftWristY = results[0].pose.leftWrist.y;
     console.log(leftWristY);
     rightWristY = results[0].pose.rightWrist.y;
     console.log(rightWristY);
    }
}