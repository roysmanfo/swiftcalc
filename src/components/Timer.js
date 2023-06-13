import React, { useState, useEffect } from 'react';
import "../css/components/timer.css"



function Timer() {
    const [seconds, setSeconds] = useState(0);
    const [time, setTime] = useState('0');

    useEffect(() => {

        const min = parseInt(seconds / 60);
        setTime(`${min}:${seconds < 10 ? "0" + seconds : seconds}`)

        const intervalId = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds === 59 ? 0 : prevSeconds + 1);
        }, 1000);

        return () => {
            clearInterval(intervalId);
        };
    }, [seconds]);

    return (
        <div className='timer'>
            {time}
        </div>
    );
}

export default Timer;
