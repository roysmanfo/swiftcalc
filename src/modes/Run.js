import React, { useRef, useState, useEffect } from "react";
import "../css/modes/run.css";
import Animation from "../components/Animation";
import Timer from "../components/Timer";
import generateOperations from "../components/Generator";

const operations = generateOperations();
export default function Run() {
    const inputRef = useRef(null);
    const [inputValue, setInputValue] = useState('');
    console.log(operations[0]);
    const handleGlobalMouseDown = (event) => {
        if (!inputRef.current.contains(event.target)) {
            inputRef.current.focus();
            event.preventDefault();
        }
    };

    const handleKeyDown = () => {
        console.log(inputValue);
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

    return (
        <>
            <Animation />
            <main>
                <Timer />
                <section className="game-view">
                    <h1 className="op">{operations[0].toString()}</h1>
                    <input className="input" type="number" ref={inputRef} value={inputValue} onChange={(e) => setInputValue(e.target.value)} onKeyDown={(e) => e.key === 'Enter' ? handleKeyDown() : null} />
                </section>
            </main>
        </>
    );
}
