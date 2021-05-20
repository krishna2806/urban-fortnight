nosex=0;
nosey=0;
lwristX=0;
rwristX=0;
diffrence=0;
function setup(){
video=createCapture(VIDEO);
video.size(650,500);

canvas=createCanvas(600,600);
canvas.position(660,150);

posenet=ml5.poseNet(video,modeloaded);
posenet.on('pose',gotPoses)
}
function modeloaded(){
console.log("model load complete")
}
function gotPoses(results){
if(results.length>0){
console.log(results);
nosex=results[0].pose.nose.x;
nosey=results[0].pose.nose.y;
console.log("nose x="+nosex+"nose y="+nosey)
lwristX=results[0].pose.leftWrist.x;
rwristX=results[0].pose.rightWrist.x;
diffrence=floor(lwristX-rwristX)
console.log("x" + lwristX + "y" + rwristX + "diff" + diffrence)
}
}
function draw(){
background('#FFFF00')
fill(55, 222, 153)
stroke(81, 100, 196)
square(nosex , nosey ,diffrence)
}