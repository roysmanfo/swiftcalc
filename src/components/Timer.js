import React, { useState, useEffect, useRef } from 'react';
import '../css/components/timer.css';

function Timer(props) {
    const [seconds, setSeconds] = useState(-4);
    const [min, setMin] = useState(0);
    const [time, setTime] = useState('0');
    const intervalRef = useRef(null);

    useEffect(() => {
        if (props.stop) return;

        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 59) {
                    setMin((prevMin) => prevMin + 1);
                    return 0;
                } else {
                    return prevSeconds + 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, [props.stop]);

    useEffect(() => {
        setTime(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);
        props.setTime(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);
    }, [seconds, min, props]);

    return <div className="timer">{time}</div>;
}

export default Timer;
