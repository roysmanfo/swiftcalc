import { useState } from 'react';
import Animation from './Animation';
import { Link } from 'react-router-dom';

import '../css/components/titlescreen.css'
import leftArrowImg from "../img/svg/left-arrow.svg"


export default function TitleScreen(props) {
    const [hiddenClass, setHiddenClass] = useState('');
    const [modesAreVisible, setModesAreVisible] = useState(false);
    const modes = [
        {
            "name": "Run",
            "description": "Do 30 operation as fast as you can"
        },
        {
            "name": "Bomb",
            "description": "Do as many points as you can in 1 minute"
        },
        {
            "name": "Survival",
            "description": "Do as many points as you can without failing"
        },
    ]




    function start() {
        setHiddenClass('hidden');
    }

    function GameModeButton(props) {
        return (
            <Link to={'/mode/' + props.gamemode.toLowerCase()} style={{ gridArea: props.gamemode.toLowerCase() }}>
                <button onClick={() => start()}>
                    {props.gamemode}
                    <small>{props.description}</small>
                </button>
            </Link>
        )
    }


    return (
        <>
            <Animation className={hiddenClass} />
            <button onClick={() => setModesAreVisible(false)} title='Back to the title' className="back-button" style={modesAreVisible ? {} : {opacity: 0, zIndex: -9999}}>
                <img src={leftArrowImg} alt='Arrow pointing left'/>
            </button>
            <section className={`titlescreen ${hiddenClass}`}>
                <div className={modesAreVisible ? "title hidden" : "title"}>
                    <h1 style={{ fontSize: '9em' }}>SwiftCalc</h1>
                    <p>Complete mathematical operations as fast as you can</p>
                    <button onClick={() => setModesAreVisible(true)}>Select a mode</button>
                </div>
                <div className={modesAreVisible ? 'gamemodes' : 'gamemodes hidden'}>
                    <h1>Game modes</h1>
                    <div className='modes'>
                        {modes.map((m) => 
                            <GameModeButton gamemode={m.name} description={m.description} key={m.name} />
                        )}
                    </div>
                </div>
            </section>
        </>
    )
}
