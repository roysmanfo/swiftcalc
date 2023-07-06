import React, { useRef, useState, useEffect } from "react";
import "../css/modes/modes.css";
import "../css/responsive.css"
import Animation from "../components/Animation";
import Timer from "../components/Timer";
import generateOperations from "../components/Generator";
import Finish from "../components/Finish";
import Counter from "../components/Counter";
import Countdown from "../components/Countdown";


const MAX_OPERATIONS = 30;
const operations = generateOperations(MAX_OPERATIONS);

export default function Run() {
    const [time, setTime] = useState("0");

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
            if (operationIndex !== MAX_OPERATIONS - 1)
                setOperationIndex(operationIndex + 1);
            else setCompleted(true);
        } else {
            setMinstakes(mistakes + 1);
            setIsWrong(true);
            setTimeout(() => {
                setIsWrong(false);
                inputRef.current.focus();
            }, 500);
        }
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
            <Counter mode='run' totalOperations={MAX_OPERATIONS} curentOperation={operationIndex + 1} />
            <Timer setTime={setTime} stop={completed} className={`${completed ? "hidden" : ""}`} />
            <Finish time={time} mistakes={mistakes} hidden={!completed} />
            <GameView />
        </>
    );
}
