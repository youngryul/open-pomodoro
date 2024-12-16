import { useEffect, useState } from "react";
import { getLoactionWeather } from "../services/api.ts";

export default function useWeather() {
  const [weather, setWeather] = useState<number>();

  const fetchWeather = () => {
    getLoactionWeather()
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    fetchWeather();

    const intervalId = setInterval(fetchWeather, 4 * 60 * 60 * 1000);

    return () => clearInterval(intervalId);
  }, []);

  return weather;
}
