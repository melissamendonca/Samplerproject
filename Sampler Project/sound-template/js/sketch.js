let sounds = new Tone.Players ({
  'electronic': 'media/electronic.mp3',
  'high': 'media/highPitch.mp3',
  'piano': 'media/piano.mp3',
  'steady': 'media/steadyBeat.mp3'
})

let soundNames = ['electronic', 'high', 'piano', 'steady'];

const delay = new Tone.FeedbackDelay("8n", 0.5);

let button;
let buttons = [];
let slider;
let word;

function setup() {
  createCanvas(400, 400);
  sounds.connect(delay);
  delay.toDestination();
  //sounds.toDestination();

  
  // button = createButton('electronic');
  // button.position(200, 400);
  // //button.mousePressed(  () => playSound(word)   );

  slider = createSlider(0., 1., 0.5, 0.05);
  slider.mouseReleased( ()=>{
    delay.delayTime.value = slider.value(); 
  })

  soundNames.forEach((word, index)=>{
      buttons[index] = createButton(word);
      buttons[index].position(index*80, 200);
      buttons[index].mousePressed(  () => playSound(word)  );
 })

  
}

function draw() {
  background(10, 250, 240);
}

function keyPressed() {
  if(key === "1") {
    sounds.player('electronic').start();
  } if (key === "2") {
    sounds.player('high').start(); 
  } if (key === "3") {
    sounds.player('piano').start();
  } if (key === "4") {
    sounds.player('steady').start();
  }
}

function playSound(whichSound) {
  sounds.player(whichSound).start(); 

  }
 