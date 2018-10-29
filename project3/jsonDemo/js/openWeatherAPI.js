var weatherData;
var cityDescription;

var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var city = "Chicago";
var apiKey = "&units=imperial&appid=0c6d541367d78e47d770a9173dde8949";

var canvas;
var longitude;
var latitude;

var citySelect;

//images
var Hangzhou;
var Chicago;
var NewYork;
var Shanghai;
var Moscow;

var button;


function preload(){
	loadJSON("https://api.openweathermap.org/data/2.5/weather?q=Chicago&units=imperial&appid=0c6d541367d78e47d770a9173dde8949", getWeatherData);

	loadJSON("js/city2.json", getCityDescription);

} 


function setup(){
	//console.log(cityDescription);
	canvas = createCanvas(windowWidth, windowHeight);
	canvas.position(0,0);
	canvas.style("z-index", "-1");

	greeting = createP("Where do you want to go?");
	greeting.position(10, 10);
	createElement("br");

	greeting1 = createElement('h1', "Please select your destination");
	greeting1.position(100, 160);
	createElement("br");

	citySelect = createSelect();
	citySelect.position(100,220);
	citySelect.option("Chicago");
	citySelect.option("New York");
	citySelect.option("Hangzhou");
	citySelect.option("Shanghai");
	citySelect.option("Moscow");
	citySelect.changed(changeCity);

	//button = createButton('view details');
  	//button.position(100, 450);
  	//button.mousePressed(detail);
}


function changeCity() {
	var weatherURL = api + citySelect.value() + apiKey;
	loadJSON(weatherURL, getWeatherData);
}



function getWeatherData(data){

	weatherData = data;
	console.log(weatherData);
	console.log(weatherData.main.temp);
	//console.log(weatherData.);
	console.log(weatherData.coord.lon);
	console.log(weatherData.coord.lat);

}

function getCityDescription(data2){

	cityDescription = data2;
	console.log(cityDescription);
	console.log(cityDescription.Chicago.location);
	console.log(cityDescription.Chicago.population);
	console.log(cityDescription.NewYork.location);
	console.log(cityDescription.NewYork.population);
	console.log(cityDescription.Hangzhou.location);
	console.log(cityDescription.Hangzhou.population);
	console.log(cityDescription.Shanghai.location);
	console.log(cityDescription.Shanghai.population);
	console.log(cityDescription.Moscow.location);
	console.log(cityDescription.Moscow.population);
}


function detail(){
	background(0);
	textSize(30);
	fill(0, 200, 200);

	
}


function draw(){
	background(255);
	textSize(30);
	fill(0, 200, 200);

	
	if (citySelect.changed) {
		text("City: " + citySelect.value(), 100, 300);
		if (weatherData.coord.lat > 0) {
			if (weatherData.coord.lon > 0) {
				text("You are in the Northern Hemisphere and Eastern Hemisphere", 100, 400);
				text("Coordinate: " + weatherData.coord.lat + "N, " + weatherData.coord.lon + "E", 100, 350);
			}
			else {
				text("You are in the Northern Hemisphere and Western Hemisphere", 100, 400);
				text("Coordinate: " + weatherData.coord.lat + "N, " + weatherData.coord.lon + "E", 100, 350);
			}
		}
		else if (weatherData.coord.lat > 0) {
			if (weatherData.coord.lon > 0) {
				text("You are in the Southern Hemisphere and Eastern Hemisphere", 100, 500);
				text("Coordinate: " + weatherData.coord.lat + "S, " + weatherData.coord.lon + "E", 100, 400);
			}
			else {
				text("You are in the Southern Hemisphere and Western Hemisphere", 100, 500);
				text("Coordinate: " + weatherData.coord.lat + "S, " + weatherData.coord.lon + "E", 100, 400);
			}
		}

		if (citySelect.value() == "Chicago") {
			text(cityDescription.Chicago.location, 100, 500);
			text(cityDescription.Chicago.population, 100, 550);
		}
		if (citySelect.value() == "New York") {
			text(cityDescription.NewYork.location, 100, 500);
			text(cityDescription.NewYork.population, 100, 550);
		}
		if (citySelect.value() == "Hangzhou") {
			text(cityDescription.Hangzhou.location, 100, 500);
			text(cityDescription.Hangzhou.population, 100, 550);
		}
		if (citySelect.value() == "Shanghai") {
			text(cityDescription.Shanghai.location, 100, 500);
			text(cityDescription.Shanghai.population, 100, 550);
		}
		if (citySelect.value() == "Moscow") {
			text(cityDescription.Moscow.location, 100, 500);
			text(cityDescription.Moscow.population, 100, 550);
		}
	}
}







function WindowResized() {
	canvas = createCanvas(windowWidth, windowHeight);
}