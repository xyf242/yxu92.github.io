var canvas;

var bgColor;

var userName;

var colorButton;

var paragraph;

var textInput;

var ellipseSlider;

function setup() {
  //canvas = createCanvas(600, 600);
  canvas = createCanvas(windowWidth, windowWidthHeight);
  canvas.style("z-index", "-1");//place below everything
  //canvas.position(100, 200);
  bgColor = 200;
  
  //create a h1 element
  userName = createElement('h1', '');
  userName.position(100, 0);
  
  //create a button element
  colorButton = createButton("Change Color");
  colorButton.moousePressed(changeColor);

  //create paragraph element
  paragraph = createP('this is a paragraph');
  //paragraph.mouseOver(changeColor);
  //paragraph.moousePressed(changeColor);
  paragraph.mouseOut(changeColor);
  
  textInput = createInput("Type your name here");
  userName.html(textInput.value());
  //textInput.input(updateName);
  textInput.changed(updateName);

  createElement('br');
  //create a slider element min, max, start
  ellipseSlider = createSlider(0, 600, 300);
  
}

function changeColor() {
  
  bgColor = color(random(255));
}

function updateName() {

	userName.html(textInput.value());
}

function updateFontColor() {

	paragraph.style("color", "red");

}


function draw() {
  background(bgColor);
  fill(255, 0, 0);
  text(userInput.value(), 50, 100);
  elllipse(width/2, height/2, ellipseSlider.value(), ellipseSlider.value());
  userName.position(ellipseSlider.value(), 0);

  if(ellipseSlider.value() > 400) {
  	fill(0, 255, 0);
  	userName.hide();
  }
  else {
  	userName.show();
  	userName.position(ellipseSlider.value(), 0);
  	fill(255, 0, 0);
  }



}