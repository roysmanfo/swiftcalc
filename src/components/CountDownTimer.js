import React, { useState, useEffect, useRef } from 'react';
import '../css/components/timer.css';

export default function CountDownTimer(props) {
    const [seconds, setSeconds] = useState(parseInt(props.start.substring(props.start.indexOf(":") + 1)) + 4);
    const [min, setMin] = useState(parseInt(props.start.substring(0, props.start.indexOf(":"))));
    const [time, setTime] = useState(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);
    const intervalRef = useRef(null);

    useEffect(() => {


        intervalRef.current = setInterval(() => {
            setSeconds((prevSeconds) => {
                if (prevSeconds === 0 && min === 0)
                    return 0;

                if (prevSeconds === 0) {
                    setMin((prevMin) => prevMin > 0 ? prevMin - 1 : 0);
                    return 59;
                } else {
                    return prevSeconds - 1;
                }
            });
        }, 1000);

        return () => {
            clearInterval(intervalRef.current);
        };

    }, []);

    useEffect(() => {
        setTime(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);
        props.setTime(`${min}:${seconds < 10 ? '0' + seconds : seconds}`);

        if (props.stop === false && time === '0:00')
            props.setStop(true);

        if (min <= 0 && seconds <= 0) return;

    }, [seconds, min, props]);

    return <div className={`timer${props.stop ? " hidden" : ""}${min === 0 && seconds <= 10 ? " red" : ""}`}>{time}</div>;
}
