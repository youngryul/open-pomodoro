import { useRecoilState } from "recoil";
import { clickAtom, timerAtom } from "../../services/Atom.ts";
import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PauseBtn } from "../button/PauseBtn.tsx";
import { PlayBtn } from "../button/PlayBtn.tsx";

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

export default function Timer() {
  const [clicked, setClick] = useRecoilState(clickAtom);
  const [timer, setTimer] = useRecoilState(timerAtom);

  const onClick = () => setClick((prev) => !prev);

  useEffect(() => {
    if (clicked) {
      const id = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);

      if (timer === 0) {
        clearInterval(id);
        setTimer(1500);
        setClick(false);
      }

      return () => clearInterval(id);
    }
  }, [timer, clicked]);

  return (
    <>
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
    </>
  );
}
