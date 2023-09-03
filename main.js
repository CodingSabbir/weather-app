const inputBox=document.getElementById('inputBox');
const searchBtn=document.getElementById('searchBtn');
const temperature=document.getElementById('temperature');
const description=document.getElementById('description');
const humidity=document.getElementById('humidity');
const wind=document.getElementById('wind');
const visibility=document.getElementById('visibility');


async function checkWeather(city){
const api_key='835a9819b3ce56194f298b7645ab283f'
const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`
const weatherData= await fetch(`${url}`).then (response => response.json());
temperature.innerText=`${Math.round(weatherData.main.temp-273.15)} °C`
description.innerText=`${weatherData.weather[0].description}`
humidity.innerText=`${weatherData.main.humidity}%`
wind.innerText=`${weatherData.wind.speed}Km/H`

}

searchBtn.addEventListener('click',()=>{
    checkWeather(inputBox.value)
    
})


