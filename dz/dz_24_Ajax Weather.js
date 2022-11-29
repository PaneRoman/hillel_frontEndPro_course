// ДЗ 24. Ajax Weather

const weatherApp = document.querySelector('#whether-app');

const weatherImg = weatherApp.querySelector('.img-wrapper');
const citySelect = weatherApp.querySelector('#cities');
const refreshBtn = weatherApp.querySelector('.refresh-btn');
const weatherInfo = weatherApp.querySelector('.weather-info');

citySelect.addEventListener('input', inputHandler);
refreshBtn.addEventListener('click', clickHandler);

let weather = {
    'температура': '...loading',
    'давление': '...loading',
    'описание': '...loading',
    'влажность': '...loading',
    'скорость ветра': '...loading',
    'направление в градусах': '...loading',
};


function inputHandler(event) {
    // console.log(event);
    const cityName = event.target.value;

    getWeatherData(cityName);
}

function clickHandler(event) {
    console.log(event);
    const cityName = event.target.previousElementSibling.value;

    getWeatherData(cityName);
}


function getWeatherData(cityName) {
    const weatherPromise = fetch(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&APPID=5d066958a60d315387d9492393935c19`);
    weatherPromise
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            console.log(data);
            weather['температура'] = data.main.temp;
            weather['давление'] = data.main.pressure;            
            weather['описание'] = data.weather[0].description;        
            weather['влажность'] = data.main.humidity;
            weather['скорость ветра'] = data.wind.speed;
            weather['направление в градусах'] = data.wind.deg;

            const image = document.createElement('img');
            image.setAttribute('src', `http://openweathermap.org/img/w/${data.weather[0].icon}.png`);
            image.classList.add('weather-icon')
            weatherImg.innerHTML = '';
            weatherImg.appendChild(image);
            
            infoRef();
        })
        .catch((err) => {
            console.warn('Error>>>', err);
        })
}


function infoRef() {
    weatherInfo.innerHTML = '';
    for (let key in weather) {
        let paragraph = document.createElement('p');
        paragraph.innerText = `${key}: ${weather[key]}`;
        weatherInfo.appendChild(paragraph);
    }
}

infoRef();
getWeatherData('Dnipro');

// console.log(weather);
// console.log(weatherPromise);
// console.log(weatherApp);
