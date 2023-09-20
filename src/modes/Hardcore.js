import React, { useRef, useState, useEffect } from "react";
import "../css/modes/modes.css";
import "../css/responsive.css"
import Animation from "../components/Animation";
import generateOperations from "../components/Generator.ts";
import Finish from "../components/Finish";
import Counter from "../components/Counter";
import Countdown from "../components/Countdown";
import LifeCounter from "../components/LifeCounter";
import CountDownTimer from "../components/CountDownTimer"


const MAX_OPERATIONS = 30;
const operations = generateOperations(MAX_OPERATIONS);
const MAX_TIME = "0:10";

export default function Hardcore() {
    const [time, setTime] = useState(MAX_TIME);

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [operationIndex, setOperationIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [mistakes, setMinstakes] = useState(0);
    const [isWrong, setIsWrong] = useState(false);
    const [lifes, setLifes] = useState(1);
    const [guessed, setGuessed] = useState(false);

    const handleGlobalMouseDown = (event) => {
        if (!inputRef.current.contains(event.target)) {
            inputRef.current.focus();
            event.preventDefault();
        }
    };

    const handleKeyDown = () => {
        if (parseInt(inputValue) === operations[operationIndex].result) {
            operations[operationIndex].guessed = true;
            setGuessed(true);
            setTime(MAX_TIME)
            setInputValue("");
            if (!completed)
                setOperationIndex(operationIndex + 1);
            else setCompleted(true);
        } else {
            if (!completed){
                setLifes(lifes - 1)
                setMinstakes(mistakes + 1);
                if(lifes - 1 <= 0){
                    setCompleted(true);
                    setTime('0:00');
                    setGuessed(true);
                }
            }
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false);
                inputRef.current.focus();
            }, 500);
        }
        
        // Generate more operations if needed
        if (operationIndex === operations.length - 1)
            generateOperations(MAX_OPERATIONS).forEach((op) => operations.push(op))
    };

    useEffect(() => {
        const handleMouseDown = (event) => {
            handleGlobalMouseDown(event);
        };

        document.addEventListener("mousedown", handleMouseDown);

        return () => {
            document.removeEventListener("mousedown", handleMouseDown);
        };
    }, []); // Empty dependency array to ensure the effect runs only once

    useEffect(() => {
        inputRef.current.focus(); // Set focus on the input field after each re-render
    });

    function GameView() {
        return (
            <main className={`${completed ? "hidden" : ""}`}>
                <section className="game-view">
                    <h1 className={isWrong ? "op wrong" : "op"}>
                        {operations[operationIndex].toString()}
                    </h1>
                    <input
                        className="input"
                        type="number"
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={(e) => (e.key === "Enter" ? handleKeyDown() : null)}
                    />
                </section>
            </main>
        );
    }

    return (
        <>
            <Countdown />
            <Animation className="" />
            <LifeCounter lifes={lifes} completed={completed} />
            <Counter mode='hardcore' curentOperation={operationIndex} />
            <CountDownTimer direction='down' enableReset start={time} setGuessed={setGuessed} guessed={guessed} setTime={setTime} stop={completed} setStop={setCompleted} />
            <Finish hideTime hideMistakes time={time} guessed={operationIndex} mistakes={mistakes} hidden={!completed} />
            <GameView />
        </>
    );
}
