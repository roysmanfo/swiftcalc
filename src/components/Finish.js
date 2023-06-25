import React from "react";
import "../css/components/finish.css"

export default function Finish(props) {
    return (
        <>
            <section className={`finish-screen${props.hidden === true ? ' hidden' : ''}`}>
                <h1>Finish</h1>
                <div className="stats">
                    <div className="stat">
                        <h2>Time</h2>
                        <p>{props.time}</p>
                    </div>
                    <div className="stat">
                        <h2>Mistakes</h2>
                        <p>{props.mistakes}</p>
                    </div>
                </div>
                <button onClick={() => props.setGamemode('')}>Go back to title</button>
            </section>
        </>
    )
}

