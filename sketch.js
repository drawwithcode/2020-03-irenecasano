let myCubes = [];
let clicks = 0;
let analyzer;
let myMusic;
let volume = 0;


function preload(){
    high = loadImage("./assets/images/h.gif");
    sugarcube = loadImage("./assets/images/sugarcube.png");
    myMusic = loadSound("./assets/sound/music.mp3");
    scream = loadImage("./assets/images/scream.gif");

}

function setup() {
  createCanvas(windowWidth,windowHeight)

  analyzer = new p5.Amplitude();
  analyzer.setInput(myMusic);

myMusic.play();
myMusic.loop();
myMusic.setVolume(0.07);


  for (let i = 0; i < 0; i++) {
    if (clicks = 220) {
      myCubes[i].stop();

    }
    else {
    addCube();
  }
}

}

function draw() {
background("black");



volume = analyzer.getLevel();
volume = map(volume, 0, 1, 100, 400);


//calling functions
revealAnswer();
answered();

//text
push()
  noStroke();
  fill("blueviolet");
  textSize(80);
  textFont("Trispace");
  textAlign(CENTER, CENTER);
  text(clicks, width/2, height/2);
  pop()
  push()
  noStroke();
  fill("blueviolet");
  textSize(20);
    textFont("Syne Mono");
  text("Do you know how much sugar the average trick or treater consumes in sugar cubes? Click until you find out!\nIf you get tired, just press 'A' to reveal the answer.", 50, 50);
  pop()


  //cubes
  push()

  for(let i = 0; i < myCubes.length; i++) {

    myCubes[i].run();

  }
pop()

}

function mouseClicked() {
addCube();
clicks ++;
}

function addCube(){
const aNewCube = new Cube(mouseX, mouseY)
myCubes.push(aNewCube);
}


class Cube {
constructor(temp_x,temp_y) {
  this.x=temp_x;
  this.y=temp_y;
}

display() {
  push();
 image(sugarcube,this.x,this.y, 40, 40);
  pop();
}

updatePosition() {
  this.x += random(volume/30, -volume/30)
  this.y += random(volume/30, -volume/30)
}

run() {
  this.updatePosition();
  this.display();
}
}

//reveal answer
function revealAnswer() {
  if (key == 'A' || key == 'a') {
  clicks = 220;
}
}

//answered
function answered () {
  if (clicks > 219) {
    imageMode(CENTER);
    // image(scream,windowWidth/7, windowHeight/1.4, 270, 270);
    image(high,windowWidth/2, windowHeight/2, 300, 300);
    push()
    textAlign(CENTER);
    noStroke();
    fill("white");
    textSize(20);
    textFont("Syne Mono");
    text("A child on all that sugar?!\nPretty scary, huh?", random(windowWidth/2 + volume/80, windowWidth/2 -volume/80), random(windowHeight/1.3 +volume/80, windowHeight/1.3 -volume/80));
pop()
}
}


function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
