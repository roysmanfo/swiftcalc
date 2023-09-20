import React, { useRef, useState, useEffect } from "react";
import "../css/modes/modes.css";
import "../css/responsive.css"
import Animation from "../components/Animation";
import CountDownTimer from "../components/CountDownTimer";
import generateOperations from "../components/Generator.ts";
import Finish from "../components/Finish";
import Counter from "../components/Counter";
import Countdown from "../components/Countdown";

const MAX_OPERATIONS = 30;

export default function Bomb() {
    const operations = generateOperations(MAX_OPERATIONS);
    const [time, setTime] = useState("1:00");

    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState("");
    const [operationIndex, setOperationIndex] = useState(0);
    const [completed, setCompleted] = useState(false);
    const [mistakes, setMinstakes] = useState(0);
    const [isWrong, setIsWrong] = useState(false);

    const handleGlobalMouseDown = (event) => {
        if (!inputRef.current.contains(event.target)) {
            inputRef.current.focus();
            event.preventDefault();
        }
    };

    const handleKeyDown = () => {
        if (parseInt(inputValue) === operations[operationIndex].result) {
            operations[operationIndex].guessed = true;
            setInputValue("");
            if (!completed)
                setOperationIndex(operationIndex + 1);
            else setCompleted(true);
        } else {
            if (!completed)
                setMinstakes(mistakes + 1);
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
            <Counter mode='bomb' curentOperation={operationIndex} />
            <CountDownTimer direction='down' start={time} setTime={setTime} stop={completed} setStop={setCompleted} />
            <Finish hideTime time={time} guessed={operationIndex} mistakes={mistakes} hidden={!completed} />
            <GameView />
        </>
    );
}
