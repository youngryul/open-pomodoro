import {useEffect, useState} from 'react';
import {getLoactionWeather} from "./services/api.ts";
import Pomodoro from "./components/Pomodoro.tsx";




function App() {

    const [ weather, setWeather ] = useState<any>(null);
    const [ error, setError ] = useState<string | null>(null);


    useEffect(() => {
        getLoactionWeather().then((data) => {
            setWeather(data);
        }).catch((err) => {
            setError("Failed to fetch weather data");
            console.error(err);
        });

    }, []);


    return (
        <>
            <Pomodoro weather={weather}/>
        </>
    );

}

export default App;
