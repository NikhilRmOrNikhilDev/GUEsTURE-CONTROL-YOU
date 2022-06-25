wrist_left_x = 0;
wrist_left_y = 0;
wrist_right_x = 0;
wrist_right_y = 0;

function preload(){

}
function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);
    video.position(100, 440)

    canvas = createCanvas(550, 550);
    canvas.position(700, 410);

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on('pose', gotPoses)
}
function draw(){
    background("#808080")
}
function modelLoaded(){
    console.log("PoseNet Is Up")
}
function gotPoses(results){
    if(results.length > 0){
        console.log("Pose net is working");
        console.log(results);
        

    }
}

