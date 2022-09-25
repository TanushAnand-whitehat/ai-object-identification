Status = "";

function preload() {
    video = createVideo('video.mp4');
    video.hide();
}

function setup() {
    canvas = createCanvas(300, 300);
    canvas.position(400, 300);
}

function start() {
    detection = ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("status").innerHTML = "Detecting Real Time Objects..."
}

function modelLoaded() {
    console.log("Model has Loaded");
    video.speed(1);
    video.loop();
    video.volume(0);
    Status = true;
}

function draw() {
    image(video, 0, 0, 300, 300);
}