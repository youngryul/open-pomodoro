import axios from 'axios';

const location = "seoul";

const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_API_KEY}`

export function getWeater() {
    axios.get(WEATHER_API).then((result) => {
        console.log("result", result.data)
        console.log("weather", result.data.weather[0])
    }).catch((error) => {
        console.log("error", error)
    })
}
