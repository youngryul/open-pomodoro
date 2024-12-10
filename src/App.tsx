import {useEffect, useState} from 'react';
import styled, {createGlobalStyle} from "styled-components";
import {AnimatePresence, motion} from "framer-motion";
import {useRecoilState} from "recoil";
import {clickAtom, timerAtom} from "./Atom";

const GlobalStyle = createGlobalStyle`
    body {
      background-color: #81ecec;
      width: 480px;
      margin: 0 auto;
    }
`;

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Title = styled.h1`
    color: white;
`;

const Main = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 100px;
`;

const Box = styled(motion.div)`
    width: 120px;
    height: 200px;
    background-color: white;
    box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1), 0 10px 20px rgba(0, 0, 0, 0.06);
    border-radius: 10px;
    color: #81ecec;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 50px;
    font-weight: bolder;
`;

const Circle = styled.div`
    background-color: white;
    opacity: 0.5;
    width: 15px;
    height: 15px;
    border-radius: 50px;
    margin: 10px;
`;

const Between = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-right: 10px;
    margin-left: 10px;
`;

const Button = styled(motion.button)`
    margin-top: 100px;
    width: 100px;
    height: 100px;
    background-color: black;
    opacity: 0.3;
    border-radius: 50px;
    color: white;
    font-size: 50px;
    font-weight: bolder;
`;

const Recode = styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 80px;
`;

const Counter = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center ;
    margin: 50px;
`;

const Name = styled.div`
    color: white;
    font-weight: bolder;
    font-size: 20px;
`;

const Score = styled.div`
    color: white;
    opacity: 0.7;
    font-weight: bolder;
    font-size: 20px;
`;

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


function App() {
    const [ clicked, setClick ] = useRecoilState(clickAtom);
    const [ timer, setTimer ] = useRecoilState(timerAtom);
    const [ round, setRound ] = useState(0);
    const [ goal, setGoal ] = useState(0);
    const onClick = () => setClick((prev) => !prev);

    useEffect(() => {
        if(clicked) {
            const id = setInterval(() => {
                setTimer((prev) => prev - 1);
            }, 1000);

            if(timer === 0) {
                clearInterval(id);
                setTimer(1500);
                setClick(false);
                if( round === 4) {
                    setGoal((prev) => prev + 1);
                    setRound(0);
                }
                else {
                    setRound((prev) => prev + 1);
                }
            }

            return() => clearInterval(id);
        }
    }, [timer, clicked]);


    return (
        <>
            <GlobalStyle/>
            <Wrapper>
                <Title>Pomodoro</Title>
                <AnimatePresence>
                    <Main>
                        <Box
                            variants={BoxVar}
                            initial="start"
                            animate="end"
                            key={"min"+Math.floor(timer/60)}>
                            {Math.floor(timer/60)}</Box>
                        <Between>
                            <Circle/>
                            <Circle/>
                        </Between>
                        <Box
                            variants={BoxVar}
                            initial="start"
                            animate="end"
                            key={"sec"+timer}>
                            {(timer % 60).toString().padStart(2, '0')}</Box>
                    </Main>
                    <Button
                        onClick={onClick}
                        variants={BtnVar}
                        whileHover="hover"
                        key={clicked.toString()}
                    >
                        {clicked ? "||" : "▶"}
                    </Button>
                </AnimatePresence>
                <Recode>
                    <Counter>
                        <Score>{round}/4</Score>
                        <Name>ROUND</Name>
                    </Counter>
                    <Counter>
                        <Score>{goal}/12</Score>
                        <Name>GOAL</Name>
                    </Counter>
                </Recode>
            </Wrapper>
        </>
    );

}

export default App;
