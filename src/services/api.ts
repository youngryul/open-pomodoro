import axios from "axios";

export function getLoactionWeather(): Promise<number> {
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
    const WEATHER_API = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=8d4f2144cd566aeac4e42064d2e7ebbe`;

  const result =  await axios.get(WEATHER_API);
  return result.data.weather[0].id;

}
