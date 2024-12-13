import Pomodoro from "./components/pomodoro/Pomodoro.tsx";
import useWeather from "./hooks/useWeather.tsx";

function App() {
  const weather = useWeather();

  return (
    <>
      <Pomodoro weather={weather} />
    </>
  );
}

export default App;
