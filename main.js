noseX=0;
noseY=0;
difference= 0;
rightWristX= 0;
leftWristX= 0;

function setup() {
    video = createCapture(VIDEO);
    video.size(550,500)

    canvas = createCanvas(550,550)
    canvas.position(560,150)

    poseNet = ml5.poseNet(video, modelLoaded)
    poseNet.on("pose", gotPoses)
}


function modelLoaded(){
    console.log("se inicio el poseNet :D")
}

function gotPoses(results){

if(results.length > 0){
    //console.log(results)

    noseX = (results[0].pose.nose.x)
    noseY = (results[0].pose.nose.y)

    rightWristX = (results[0].pose.rightWrist.x)
    leftWristX = (results[0].pose.leftWrist.x)
    difference = floor(leftWristX - rightWristX)
    console.log(difference)
    //console.log("nosex= "+noseX+ "noseY= "+noseY+ "wrist right= "+rightWristX+"left wrist "+leftWristX+ "difference= "+ difference)

}

}

function draw(){
    background("#CFC4C2");
    document.getElementById("square_side").innerHTML = "El alto y ancho del cuadro seran" + difference + "px"
    fill('#DE5037')
    stroke('#4e1f16ff')
    square(noseX, noseY, difference)
}