var canvas;

//images
var image1;
var image2;
var image3;
var image4;

//sounds
var sound1;

//screen text
var greeting;
var userName;
var firstOption;
var secondOption;

//input
var nameInput;



function preload(){
	image1 = loadImage('./images/1.jpg');
	image2 = loadImage('./images/2.jpg');
	image3 = loadImage('./images/3.jpg');
	image4 = loadImage('./images/4.jpg');
	sound1 = loadSound('./sounds/BGM1.mp3');
}


function setup(){
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	beginning();
}


function beginning(){
	background(image1);
	sound1.play();
	greeting = createP("Welcome to the kindle store!");
	greeting.position(100, 100);
	createElement("br");

	nameInput = createInput("type your name here");
	nameInput.changed(startStory);
}

//layer 1
function startStory(){
	background(0);
	//sound1.stop();
	greeting.hide();
	nameInput.hide();
	sound1.stop();

	userName = createElement('h1', nameInput.value());
	title = createElement('h1', "Do you often read books?");


	firstOption = createElement('h2', "Yes");
	secondOption = createElement('h2', "No");

	firstOption.mousePressed(Yes);
	secondOption.mousePressed(No);
}

//layer 1 option 1
function Yes(){

	title.html( "What kinds of books do you usually read?");
	firstOption.html("fictions and literatures");
	secondOption.html( "professional book and reference books");

	firstOption.mousePressed(Money);
	secondOption.mousePressed(No);

}

//layer 1 option 2
function No(){
	firstOption.hide();
	secondOption.hide();

	title.html("You don't need to buy anything.");
}

//layer 2
function Money(){
	// firstOption.hide();
	// secondOption.hide();

	title.html( "Do you have enough budget?");

	firstOption.html("Definitely not");
	secondOption.html("Money is just a number");

	firstOption.mousePressed(Cheaperkindles);
	secondOption.mousePressed(Oasis);
}

//layer 2 option 1
function Cheaperkindles(){
	

	title.html("Do you need to read books at night?");

	firstOption.html("Yes");
	secondOption.html("No");

	firstOption.mousePressed(Paperwhite);
	secondOption.mousePressed(Kindle);
}

//layer 2 option 2
function Oasis(){
	firstOption.hide();
	secondOption.hide();

	background(image4);

	title.html("Kindle Oasis suits you best");

	
}

//layer 3
function Paperwhite(){
	firstOption.hide();
	secondOption.hide();

	background(image3);

	title.html("Kindle Paperwhite suits you best");
}

//layer 3
function Kindle(){
	firstOption.hide();
	secondOption.hide();

	background(image2);

	title.html("You'd better purchase the basic kindle");

	
}


function WindowResized(){
	canvas = createCanvas(windowWidth, windowHeight);
}