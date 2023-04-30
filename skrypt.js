
function newYork(){
    names.innerHTML="New York";
    conditions.innerHTML="Sunny";
    icon.src= "icon/day/113.png"; 
    temps.innerHTML = '21'+ '&deg;';
    clouds.innerHTML = "53%";
    humidities.innerHTML = "42%";
    winds.innerHTML = "10km/h";
    document.getElementById('weather-app').style.backgroundImage="url(images/day/frank-mckenna-eXHeq48Z-Q4-unsplash.jpg)";
};

function london(){
    names.innerHTML="London";
    conditions.innerHTML="Cloudy";
    icon.src= "icon/day/116.png"; 
    temps.innerHTML = '16'+ '&deg;';
    clouds.innerHTML = "89%";
    humidities.innerHTML = "64%";
    winds.innerHTML = "8km/h";
    document.getElementById('weather-app').style.backgroundImage="url(images/day/michael-diane-weidner-h-rP5KSC2W0-unsplash.jpg)";
};

function california(){
    names.innerHTML="California";
    conditions.innerHTML="Windy";
    icon.src= "icon/night/248.png"; 
    temps.innerHTML = '9'+ '&deg;';
    clouds.innerHTML = "15%";
    humidities.innerHTML = "43%";
    winds.innerHTML = "15km/h";
    document.getElementById('weather-app').style.backgroundImage="url(images/night/chuttersnap-rk2s0sm8xF4-unsplash.jpg)";
};

function paris(){
    names.innerHTML="Paris";
    conditions.innerHTML="Rainy";
    icon.src= "icon/night/266.png"; 
    temps.innerHTML = '10'+ '&deg;';
    clouds.innerHTML = "80%";
    humidities.innerHTML = "53%";
    winds.innerHTML = "8km/h"; 
    document.getElementById('weather-app').style.backgroundImage="url(images/night/benjamin-sow-QjR_snVQn4c-unsplash.jpg)";
};

function tokyo(){
    names.innerHTML="Tokyo";
    conditions.innerHTML="Cloudy";
    icon.src= "icon/night/116.png"; 
    temps.innerHTML = '20'+ '&deg;';
    clouds.innerHTML = "72%";
    humidities.innerHTML = "43%";
    winds.innerHTML = "7km/h"; 
    document.getElementById('weather-app').style.backgroundImage="url(images/night/chan-hoi-uj-w-v7OFT4-unsplash.jpg)";
};


function weather(){
    var checkbox = document.getElementById("myCheck");
    if (checkbox.checked){
        document.getElementById("weather-map").style.backgroundImage = "url(images/1.png)";
    } else {
        document.getElementById("weather-map").style.backgroundImage = "url(images/2.png)";
    }
};


function zoomin(){
    var myImg = document.getElementById("weather-map").style.backgroundImage;
    var currWidth = myImg.clientWidth;
    myImg.style.backgroundImage.width = (currWidth + 100) + "px";
}
function zoomout(){
    var myImg = document.getElementById("weather-map").style.backgroundImage;
    var currWidth = myImg.clientWidth;
    myImg.style.backgroundImage.width = (currWidth - 100) + "px";
}