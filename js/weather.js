const API_KEY = "f90b70b2ba1893dccf490f83ba49da3e";

function onGeoOk(position){
    const lat = position.coords.latitude;
    const log = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${log}&appid=${API_KEY}&units=metric&lang=kr`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weather = document.querySelector("#weather span:first-child");
            weather.innerText  = `🌈 ${data.weather[0].description} / ${data.main.temp}`;
        });
}

function onGeoError(){
    alert("위치를 허용해주세요 !");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError)
