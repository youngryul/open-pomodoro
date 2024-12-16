import { useEffect, useState } from "react";
import { useAtom } from "jotai";
import {clickAtom, timerAtom} from "../../services/Atom.ts";

export default function Counter() {
  const [clicked] = useAtom(clickAtom);
  const [round, setRound] = useState(0);
  const [goal, setGoal] = useState(0);
  const [timer] = useAtom(timerAtom);

  useEffect(() => {
    if (clicked) {
      if (round === 4) {
        setGoal((prev) => prev + 1);
        setRound(0);
      } else if (timer === 0) {
        setRound((prev) => prev + 1);
      }
    }
  }, [timer, clicked]);

  return (
    <>
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
    </>
  );
}
