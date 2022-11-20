x = 0;
y = 0;

drawApple = "";
screenWidth = 0;
screenHeight = 0;
apple = "";
toNumber = 0;

var SpeechRecognition = window.webkitSpeechRecognition;
  
var recognition = new SpeechRecognition();

function start()
{
  document.getElementById("status").innerHTML = "O sistema está ouvindo. Por favor, fale.";  
  recognition.start();
} 

function preload() {
  apple = loadImage('apple.png');
}
 
recognition.onresult = function(event) {

 console.log(event); 

 content = event.results[0][0].transcript;

    document.getElementById("status").innerHTML = "A fala foi reconhecida: " + content; 

  toNumber = Number(content);
  if(Number.isInteger(toNumber)){
    drawApple = "set";
  }
}

function setup() {
 screenWidth = window.innerWidth;
 screenHeight = window.innerHeight;
 canvas = createCanvas(screenWidth, screenHeight-150)
 canvas.position(0, 150)
}

function draw() {
  if(drawApple == "set")
  {
    document.getElementById("status").innerHTML = toNumber + " maçãs desenhadas";
    drawApple = "";
    for(var i = 1; i <= toNumber; i++){
      x = Math.floor(Math.random() * 700);
      y = Math.floor(Math.random() * 400);
      image(apple, x, y, 50, 50);
    }
  }
}

function speak(){
    var synth = window.speechSynthesis;

    var utterThis = new SpeechSynthesisUtterance(speakData);

    synth.speak(utterThis);

    speakData = "";
}
