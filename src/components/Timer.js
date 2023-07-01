import React, { useState, useEffect } from 'react';
import '../css/components/timer.css';

function Timer(props) {
    const [seconds, setSeconds] = useState(0);
    
    // Start at -2 because on load the counter skips two numbers on render time (starts at 2:00 instead of 0:00)
    const [min, setMin] = useState(-2); 
    const [time, setTime] = useState('0');

    useEffect(() => {
        if (props.stop) return;


        setTime(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);
        props.setTime(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);
        
        const intervalId = setInterval(() => {
            setSeconds((prevSeconds) => (prevSeconds === 59 ? 0 : prevSeconds + 1));
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds, min, props]);

    useEffect(() => {
        if (seconds === 0) {
            setMin((prevMin) => prevMin + 1);
        }
    }, [seconds]);

    return <div className="timer">{time}</div>;
}

export default Timer;
