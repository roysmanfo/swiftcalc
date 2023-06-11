import { useState } from 'react'
import Animation from './Animation';
import '../css/titlescreen.css'


export default function TitleScreen(){
    const [hiddenClass, setHiddenClass] = useState('');
    
    return(
        <>
        <Animation className={hiddenClass} />
        <section className={`titlescreen ${hiddenClass}`}>
            <h1>SwiftCalc</h1>
            <p>Complete mathematical operations as fast as you can</p>
            <button onClick={() => setHiddenClass('hidden')}>Start</button>
        </section>
        </>
    )
}