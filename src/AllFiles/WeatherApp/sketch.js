var weather;
var apiPath='http://api.openweathermap.org/data/2.5/weather?q=';
//var city1='London';
var city1='London';
var apiKey='&appid=0f213e434cbf5b39bafe28133bc5c6d0';
var units='&units=imperial';
var input1;
var humidityI;
var url=apiPath + city + apiKey + units;

function setup() {
	//createCanvas(400,200);
	//var input = select('#city');
	//var button = select('submit');
	//button.mousePressed(weatherAsk);

	// var url=apiPath + city + apiKey + units;
	// loadJSON(url, gotData);//no 'jsonp'
}

function weatherAsk(){
	input= document.getElementById("city").value;
	input1=document.getElementById("city").value;
	console.log('This is the city you are searching: ' + input);

	var url=apiPath + input + apiKey + units;
	loadJSON(url, gotData);
}

function gotData(data) {
	// println(data);
	//console.log(data);
	weather = data;
}

function draw(){
	//background(0);
	if(weather){
		var temp1=weather.main.temp;
		var humidity=weather.main.humidity;
		var pressure=weather.main.pressure;
		var maxT=weather.main.temp_max;
		var minT=weather.main.temp_min;
		
		
		document.getElementById("temp").innerHTML = "The temperature in " + input1 + " is: " + temp1 + " Degrees Fahrenheit";
		document.getElementById("humid").innerHTML = "The humidity in " + input1 + " is: " + humidity;
		document.getElementById("pres").innerHTML = "The pressure in " + input1 + " is: " + pressure + " hpa";
		document.getElementById("maxt").innerHTML = "The max temperature in " + input1 + " is: " + maxT + " Degrees Fahrenheit";
		document.getElementById("mint").innerHTML = "The min temperature in " + input1 + " is: " + minT + " Degrees Fahrenheit";
		
		if(temp1>65){
			document.getElementById('skies').background= "clouds.webp";
		}
		else if((humidity>=10) && (temp1<=20)){
			document.getElementById('skies').background= "snow.gif";
		}
		else if(humidity>=60){
			document.getElementById('skies').background= "rain.gif";
		}
		
		
		// ellipse(100,100,temp,temp);
		// ellipse(300,100,humidity,humidity)
	}
}