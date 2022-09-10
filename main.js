function preload()
{

}

function setup()
{
    canvas = createCanvas(600, 400);
    canvas.position(450, 200);
    video = createCapture(VIDEO);
    video.hide();
}

function draw()
{
    image(video, 0, 0, 600, 400);
    fill('pink'); 
    stroke('purple')
    circle(20, 20, 100);
    circle(20, 380, 100);
    circle(580, 380, 100);
    circle(580, 20, 100);
}

function capture()
{
    save("birthday_girl.png");
}