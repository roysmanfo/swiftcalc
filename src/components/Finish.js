import React from "react";
import { Link } from "react-router-dom";
import "../css/components/finish.css"
import "../css/responsive.css"

export default function Finish(props) {

    function Guessed() {
        return (
            <>
                {
                    props.guessed !== undefined ?
                        <div className="stat">
                            <h2>Guessed</h2>
                            <p>{props.guessed}</p>
                        </div> : <></>
                }
            </>
        )
    }

    function Time() {
        return (
            <>
                {
                    props.hideTime === undefined ?
                        <div className="stat">
                            <h2>Time</h2>
                            <p>{props.time}</p>
                        </div> : <></>
                }
            </>
        )
    }

    function Mistakes() {
        return (
            <>
                {
                    props.hideMistakes === undefined ?
                        <div className="stat">
                            <h2>Mistakes</h2>
                            <p>{props.mistakes}</p>
                        </div> : <></>
                }
            </>
        )
    }

    return (
        <>
            <section className={`finish-screen${props.hidden === true ? ' hidden' : ''}`}>
                <h1>Finish</h1>
                <div className="stats">
                    <Time />
                    <Guessed />
                    <Mistakes />
                </div>
                {/* <button onClick={() => window.location.reload()}>Play again</button> */}
                <Link to='/'>
                    <button>Title Screen</button>
                </Link>
            </section>
        </>
    )
}

