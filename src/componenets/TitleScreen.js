import { useState } from 'react'
import Animation from './Animation';
import '../css/components/titlescreen.css'


export default function TitleScreen(props) {
    const [hiddenClass, setHiddenClass] = useState('');

    function start(gamemode) {
        setHiddenClass('hidden');
        props.setGamemode(gamemode);
    }

    function GameModeButton(props) {
        return (
            <button onClick={() => start(props.gamemode.toLowerCase())}>
                {props.gamemode}
            </button>
        )
    }


    return (
        <>
            <Animation className={hiddenClass} />
            <section className={`titlescreen ${hiddenClass}`}>
                <h1>SwiftCalc</h1>
                <p>Complete mathematical operations as fast as you can</p>
                <div style={{ display: 'flex', gap: '2rem' }}>
                    <GameModeButton gamemode={'Classic'} />
                    <GameModeButton gamemode={'Bomb'} />
                </div>
            </section>
        </>
    )
}
