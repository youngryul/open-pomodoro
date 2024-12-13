import axios from "axios";

export function getLoactionWeather(): Promise<any> {
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        getWeather(lat, lon).then(resolve).catch(reject);
      },
      (error) => {
        reject(error);
      },
    );
  });
}

async function getWeather(lat: number, lon: number) {
  const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_API_KEY}`;

  return await axios.get(WEATHER_API).then((result) => {
    return result.data.weather[0].id;
  });
}
