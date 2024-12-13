import Pomodoro from "./components/Pomodoro.tsx";
import useWeather from "./utils/hooks.tsx";

function App() {
  const weather = useWeather();

  return (
    <>
      <Pomodoro weather={weather} />
    </>
  );
}

export default App;
