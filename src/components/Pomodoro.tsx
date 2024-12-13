import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { clickAtom, timerAtom } from "../services/Atom.ts";
import { PlayBtn } from "./PlayBtn.tsx";
import { PauseBtn } from "./PauseBtn.tsx";
import switchWeather from "../utils/function.tsx";

const BtnVar = {
  hover: { scale: 1.3 },
};

const BoxVar = {
  start: {
    scale: 0.5,
  },
  end: {
    scale: 1,
    transition: {
      type: "spring",
      bounce: 0.3,
    },
  },
};

interface PomodoroProps {
  weather: number;
  weatherId?: number;
}

function Pomodoro({ weather }: PomodoroProps) {
  const [clicked, setClick] = useRecoilState(clickAtom);
  const [timer, setTimer] = useRecoilState(timerAtom);
  const [round, setRound] = useState(0);
  const [goal, setGoal] = useState(0);

  const onClick = () => setClick((prev) => !prev);
  const { bgColor, icon } = switchWeather(weather);

  useEffect(() => {
    if (clicked) {
      const id = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      if (timer === 0) {
        clearInterval(id);
        setTimer(1500);
        setClick(false);
        if (round === 4) {
          setGoal((prev) => prev + 1);
          setRound(0);
        } else {
          setRound((prev) => prev + 1);
        }
      }

      return () => clearInterval(id);
    }
  }, [timer, clicked]);

  return (
    <div className={`${bgColor} overflow-hidden`}>
      <div className="flex flex-col items-center justify-center  w-[480px] h-full mx-auto">
        <h1 className="text-white text-4xl font-bold">{icon}Pomodoro</h1>
        <AnimatePresence>
          <div className="flex flex-row mt-12">
            <motion.div
              className="w-[120px] h-[200px] bg-white shadow-lg rounded-lg text-black flex items-center justify-center text-5xl font-bold"
              variants={BoxVar}
              initial="start"
              animate="end"
              key={"min" + Math.floor(timer / 60)}
            >
              {Math.floor(timer / 60)}
            </motion.div>
            <div className="flex flex-col justify-center mx-2">
              <div className="bg-white opacity-50 w-4 h-4 rounded-full m-2"></div>
              <div className="bg-white opacity-50 w-4 h-4 rounded-full m-2"></div>
            </div>
            <motion.div
              className="w-[120px] h-[200px] bg-white shadow-lg rounded-lg text-black flex items-center justify-center text-5xl font-bold"
              variants={BoxVar}
              initial="start"
              animate="end"
              key={"sec" + timer}
            >
              {(timer % 60).toString().padStart(2, "0")}
            </motion.div>
          </div>
          <motion.button
            onClick={onClick}
            className="mt-12 w-[80px] h-[80px] bg-black opacity-30 rounded-full text-white text-5xl font-bold"
            variants={BtnVar}
            whileHover="hover"
            key={clicked.toString()}
          >
            {clicked ? <PauseBtn /> : <PlayBtn />}
          </motion.button>
        </AnimatePresence>
        <div className="flex flex-row mt-12">
          <div className="flex flex-col items-center mx-12">
            <div className="text-white font-bold text-lg opacity-70">
              {round}/4
            </div>
            <div className="text-white font-bold text-lg">ROUND</div>
          </div>
          <div className="flex flex-col items-center mx-12">
            <div className="text-white font-bold text-lg opacity-70">
              {goal}/12
            </div>
            <div className="text-white font-bold text-lg">GOAL</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
