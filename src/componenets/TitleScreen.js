import { useState } from 'react'
import Animation from './Animation';
import '../css/titlescreen.css'


export default function TitleScreen(props){
    const [hiddenClass, setHiddenClass] = useState('');
    
    function start(gamemode){
        setHiddenClass('hidden');
        props.setGamemode(gamemode);
    }

    return(
        <>
        <Animation className={hiddenClass} />
        <section className={`titlescreen ${hiddenClass}`}>
            <h1>SwiftCalc</h1>
            <p>Complete mathematical operations as fast as you can</p>
            <div style={{ display: 'flex' }}>
                <button onClick={() => start('classic')}>Classic Mode</button>
            </div>
        </section>
        </>
    )
}