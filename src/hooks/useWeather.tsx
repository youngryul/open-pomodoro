import { useEffect, useState } from "react";
import { getLoactionWeather } from "../services/api.ts";

export default function useWeather() {
  const [weather, setWeather] = useState<any>(null);

  useEffect(() => {
    getLoactionWeather()
      .then((data) => {
        setWeather(data);
      })
      .catch((err) => {
        console.error(err);
      });
  }, []);

  return weather;
}


