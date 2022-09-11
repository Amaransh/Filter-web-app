function preload()
{

}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.position(70,200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide()
    posenet = ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPoses);

}

function draw()
{
    image(video, 0, 0, 300, 300)
}

function take_snapshot()
{
    save("pick.png");

}

function modelLoded()
{
    console.log("PoseNet is Initialized")
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        console.log("nose x = " + results[0].pose.nose.x);
        console.log("nose y = " + results[0].pose.nose.y);
    }
}