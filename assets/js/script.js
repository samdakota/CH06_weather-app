// Requirements for entering city name
// Fetch API
// fix forecast cards for loop
// generate data objects for searched cities? push to local storage and display

const pastSearchContainer = document.getElementById("past-search");
const currentSearchContainer = document.getElementById("current-display");
const todayDateContainer = document.getElementById("current-display");

const forecastContainer = document.getElementById("forecast-display");

var searchButton = document.getElementById("current-search");
searchButton.addEventListener("click", searchClick);

var getCoordinates = function() {



}

var getWeather = function(location) {
    var {lat} = location;
    var {lon} = location
    `webstie.com/${lat}restofstring`
    'website.com/' + lat + 'restofstring'
    var weatherUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${location.lat}&lon=${lon}&exclude={part}&appid=${API key}`;
    fetch(weatherUrl).then(function(response) {
        response.json().then(function(data) {

        });
    });
}

var getCityLocation
function createCityButton() {
  var cityInput = document.querySelector("input[name='city']").value;
  var pastCitySearch = document.createElement("button");
  pastCitySearch.setAttribute("class", "city-search");
  pastCitySearch.textContent = cityInput;
  pastSearchContainer.appendChild(pastCitySearch);
}

var todayWeather = {
        date: 'Test date',
        temp: 'test',
        wind: 'test',
        humidity: 'test',
        uv: 'test',
    }

function displayCurrentWeather() {
    var todayDate = document.createElement("h1");
    todayDate.textContent = todayWeather.date;
    var todayTemp = document.createElement("p");
    todayTemp.textContent = "Temp: " + todayWeather.temp;
    var todayWind = document.createElement("p");
    todayWind.textContent = "Wind: " + todayWeather.wind;
    var todayHumidity = document.createElement("p");
    todayHumidity.textContent = "Humidity: " + todayWeather.humidity;
    var todayUv = document.createElement("p");
    todayUv.textContent = "UV Index: " + todayWeather.uv;
    todayDateContainer.append(todayDate,todayTemp,todayWind,todayHumidity,todayUv);
}

var forecast = [
  {
    date: "test date1",
    temp: "test temp",
    wind: "test wind",
    humidity: "test humidity",
    uv: "test uv",
  },
  {
    date: "test date2",
    temp: "test temp",
    wind: "test wind",
    humidity: "test humidity",
    uv: "test uv",
  },
];

var indexCount = 0;

function createForecastCards() {
  var dayForecast = forecast[indexCount];
  for (var i = 0; i < 5; i++) {
    var dayDate = dayForecast.date[i];
    var dayTemp = dayForecast.temp[i];
    var dayWind = dayForecast.wind[i];
    var dayHumidity = dayForecast.humidity[i];
    var dayUv = dayForecast.uv[i];
    var forecastCard = document.createElement("article");
    forecastCard.setAttribute("class", "forecast-card");
    var forecastInfo = document.createElement("div");
    forecastInfo.setAttribute("class", "forecast-info");
    var forecastDate = document.createElement("h1");
    forecastDate.textContent = "Date: " + dayDate;
    var forecastTemp = document.createElement("p");
    forecastTemp.textContent = "Temp: " + dayTemp;
    var forecastWind = document.createElement("p");
    forecastWind.textContent = "Wind: " + dayWind;
    var forecastHumidity = document.createElement("p");
    forecastHumidity.textContent = "Humidity: " + dayHumidity;
    var forecastUv = document.createElement("p");
    forecastUv.textContent = "UV Index: " + dayUv;

    forecastInfo.append(forecastDate,forecastTemp,forecastHumidity,forecastUv);
    forecastCard.appendChild(forecastInfo);
    forecastContainer.appendChild(forecastCard);
  }
}

function searchClick() {
    createCityButton();
    displayCurrentWeather();
    createForecastCards();
}