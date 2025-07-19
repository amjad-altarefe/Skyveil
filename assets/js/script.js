const APIkey = '066d608fd3d9e7edcf7ccaed8230ce6a';
const baseURL = "https://api.openweathermap.org/data/2.5/";

const cityName = document.getElementById("city");
const date = document.getElementById("date");
const description =document.getElementById("description");
const temp =document.getElementById("temp");
const humidity =document.getElementById("humidity");
const wind =document.getElementById("wind");
const weeklyForecast =document.getElementById("weeklyForecast");


document.getElementById("getWeather").addEventListener("click", function(){
    var searchBar = document.getElementById("loc");
    if (searchBar.value == ""){
        clearData();
        document.getElementById("header").innerHTML = "Please enter the city name";
        return;
    }
    const city = searchBar.value.split(",")[0];
    requestWeatherData(city);
})

function clearData() {
    cityName.textContent = "" ;
    date.textContent = "" ;
    description.textContent = "" ;
    temp.textContent = "" ;
    humidity.textContent = "" ;
    wind.textContent = "" ;
    weeklyForecast.textContent = "" ;
    document.getElementsByClassName("hpart3")[0].innerHTML = "" ;

}


function getCurrentWeather(city){
    return fetch(`${baseURL}weather?q=${city}&apikey=${APIkey}`);
    //return fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIkey}`);
}



async function requestWeatherData(city){
    const responseCurrent = await getCurrentWeather(city);
    if (responseCurrent.status === 200)
        {
            const currentWeathetData = await responseCurrent.json();
            await displayDailyForecast(city,currentWeathetData);
        }
        else{
            clearData();
            document.getElementById("header").innerHTML = "The weather for this place is not available";
        }
} 


function displayDailyForecast (city,data){
    cityName.textContent=city;

    
    const options = {weekday: "long", yeae: "numeric", month: "long", day: "numeric"};
    const currentDate = new Date().toLocaleString('en-EG' , options);
    date.textContent = currentDate;

    document.getElementsByClassName("hpart3")[0].innerHTML = "partly cloudy"
    document.getElementById("header").innerHTML = "Today's weather";
    
    const tempC = Math.round(data.main.temp - 273.15);
    temp.textContent = `${tempC}°C`;

    description.textContent = `weather condition: ${data.weather[0].description}`;
    humidity.textContent = `Humidity: ${data.main.humidity}%`;
    wind.textContent = `Wind speed: ${data.main.speed}mph`;
    if (data.weather[0].description == "clear sky")
    {
    document.getElementsByClassName('part4')[0].innerHTML = `<span>&#9728;</span>`
    }
    else if (data.weather[0].description == "partly cloudy" || data.weather[0].description == "broken clouds" || 
             data.weather[0].description == "scattered clouds" || data.weather[0].description == "few clouds"){
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127780</span>`
    }
    else if (data.weather[0].description == "haze" || data.weather[0].description == "dust"){
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127787;</span>`
    }
    else if (data.weather[0].description == "moderate rain" || data.weather[0].description == "high rain" || 
             data.weather[0].description == "Intermittent rain" || data.weather[0].description == "rainy"){
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127783</span>`
    }
    else if (data.weather[0].description == "snow"){
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127784</span>`
    }
    else if (data.weather[0].description == "Cloud with tornado"){
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127786</span>`
    }
    else if (data.weather[0].description == "Cloud with lightning"){
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127785</span>`
    }
    else {
        document.getElementsByClassName('part4')[0].innerHTML = `<span>&#127777</span>`
    }
    
}
