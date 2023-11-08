

let frames = [];
let idx = 1;

// take your plant vid and get frame jpgs (using ffmpeg)
// ffmpeg -ss 00:00:04 -t 5 -i plantvid.mp4 -vf "fps=fps=30,scale=640:-1" -q:v 2 frame_%04d.jpg

function setup() {
  createCanvas(windowWidth, windowHeight);
  // noCanvas();
    for (let i = 1; i < 151; i ++) {
        let filename = `assets/frame_${String(i).padStart(4, '0')}.jpg`;
    
        frames.push( loadImage(filename) );
    }
    imageMode(CENTER);
}

function draw() {
    background(0);
    image(frames[idx], width/2, height/2, width, height);
    
    //idx = constrain(int((mouseX / width) * 149) + 1, 1, 150);
    idx = (constrain(Math.floor(dist(mouseX, mouseY, width/2, height/2)/5), 1, 149));
    //console.log(idx);
    //idx = idx%58 + 1;
}


