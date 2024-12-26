import changeBackground from "../../utils/changeBackground.tsx";
import Timer from "./Timer.tsx";
import Counter from "./Counter.tsx";

type PomodoroProps = {
  weather: number | undefined;
};

function Pomodoro({ weather }: PomodoroProps) {
  const { bgColor, icon } = changeBackground(weather ?? 0);

  return (
    <div className={`${bgColor} overflow-hidden`}>
      <div className="flex flex-col items-center justify-center  w-[480px] h-screen mx-auto">
        <h1 className="text-white text-4xl font-bold">{icon}Pomodoro</h1>
        <Timer />
        <Counter />
      </div>
    </div>
  );
}

export default Pomodoro;
