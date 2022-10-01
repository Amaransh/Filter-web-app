noseX=0;
noseY=0;

function preload()
{
   clown_mustache = loadImage('https://i.postimg.cc/mrY8ZtNF/moustache-filter.png')
}

function setup()
{
    canvas = createCanvas(500,400);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    posenet = ml5.poseNet(video, modelLoded);
    posenet.on('pose', gotPoses);
}

function draw()
{
    image(video, 0, 0, 500, 400)
    image(clown_mustache, noseX-25, noseY-25, 30 ,30)
}

function take_snapshot()
{
    save("mustachepick.png");
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
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("nose x = " + noseX);
        console.log("nose y = " + noseY);
    }
}