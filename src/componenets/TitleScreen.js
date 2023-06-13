import { useState } from 'react'
import Animation from './Animation';
import '../css/components/titlescreen.css'


export default function TitleScreen(props) {
    const [hiddenClass, setHiddenClass] = useState('');
    const [modesAreVisible, setModesAreVisible] = useState(false);
    const modes = [
        {
            "name": "Run",
            "description": "Do 20 operation as fast as you can"
        },
        {
            "name": "Bomb",
            "description": "It is similar to run, but you only have 1min 30s"
        },
        {
            "name": "Survival",
            "description": "Do as many points as you can without failing"
        },
    ]




    function start(gamemode) {
        setHiddenClass('hidden');
        props.setGamemode(gamemode);
    }

    function GameModeButton(props) {
        return (
            <button style={{ gridArea: props.gamemode.toLowerCase() }} onClick={() => start(props.gamemode.toLowerCase())}>
                {props.gamemode}
                <small>{props.description}</small>
            </button>
        )
    }


    return (
        <>
            <Animation className={hiddenClass} />
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
