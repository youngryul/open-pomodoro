import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from "framer-motion";
import { useRecoilState } from "recoil";
import { clickAtom, timerAtom } from "../services/Atom.ts";
import {PlayBtn} from "./PlayBtn.tsx";
import {PauseBtn} from "./PauseBtn.tsx";

const BtnVar = {
    hover: { scale: 1.3 }
}

const BoxVar = {
    start: {
        scale: 0.5
    },
    end: {
        scale: 1,
        transition: {
            type: "spring",
            bounce: 0.3
        }
    }
}

interface PomodoroProps {
    weather: number;
    weatherId: number;
}

function Pomodoro({ weather }: PomodoroProps) {
    const [clicked, setClick] = useRecoilState(clickAtom);
    const [timer, setTimer] = useRecoilState(timerAtom);
    const [round, setRound] = useState(0);
    const [goal, setGoal] = useState(0);

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


    const bgColor = (weather:number) => {
        switch (weather) {
            case 200:
            case 201:
            case 202:
            case 210:
            case 211:
            case 212:
            case 221:
            case 230:
            case 231:
            case 232:
                return 'bg-yellow-300'; // 200번대: 천둥구름 관련
                break;
            case 300:
            case 301:
            case 302:
            case 310:
            case 311:
            case 312:
            case 313:
            case 314:
            case 321:
                return 'bg-green-300'; // 300번대: 안개비 및 소나기 관련
            case 500:
            case 501:
            case 502:
            case 503:
            case 504:
                return 'bg-blue-500'; // 500번대: 비 관련
            case 600:
            case 601:
            case 602:
            case 611:
            case 612:
            case 615:
            case 616:
            case 620:
            case 621:
            case 622:
                return 'bg-slate-200'; // 600번대: 눈 및 진눈깨비 관련
            case 701:
            case 711:
            case 721:
            case 731:
            case 741:
            case 751:
            case 761:
            case 762:
            case 771:
                return 'bg-amber-600'; // 700번대: 안개 및 먼지 관련
            case 800:
            case 801:
            case 802:
            case 803:
            case 804:
                return 'bg-cyan-300'; // 800번대: 맑은 하늘 및 구름 관련
            case 900:
            case 901:
            case 902:
            case 903:
            case 904:
            case 905:
            case 906:
            case 951:
            case 952:
            case 953:
            case 954:
            case 955:
            case 956:
            case 957:
            case 958:
            case 959:
            case 960:
            case 961:
            case 962:
                return 'bg-rose-300'; // 900번대: 폭풍 및 허리케인 관련
            default:
                return  'bg-gray-200'; // 기본 색상
        }
    }

    return (
        <div className={`${bgColor(weather)}`}>
            <div className="flex flex-col items-center justify-center  w-[480px] h-screen mx-auto">
                <h1 className="text-white text-4xl font-bold">Pomodoro</h1>
                <AnimatePresence>
                    <div className="flex flex-row mt-24">
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
                            {(timer % 60).toString().padStart(2, '0')}
                        </motion.div>
                    </div>
                    <motion.button
                        onClick={onClick}
                        className="mt-24 w-[80px] h-[80px] bg-black opacity-30 rounded-full text-white text-5xl font-bold"
                        variants={BtnVar}
                        whileHover="hover"
                        key={clicked.toString()}
                    >
                        {clicked ? <PauseBtn /> : <PlayBtn />}
                    </motion.button>
                </AnimatePresence>
                <div className="flex flex-row mt-20">
                    <div className="flex flex-col items-center mx-12">
                        <div className="text-white font-bold text-lg opacity-70">{round}/4</div>
                        <div className="text-white font-bold text-lg">ROUND</div>
                    </div>
                    <div className="flex flex-col items-center mx-12">
                        <div className="text-white font-bold text-lg opacity-70">{goal}/12</div>
                        <div className="text-white font-bold text-lg">GOAL</div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pomodoro;
