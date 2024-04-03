import { useState } from 'react';
import { Link } from 'react-router-dom';
import Animation from './Animation';
import leftArrowImg from "../img/svg/left-arrow.svg";
import '../css/components/titlescreen.css';

const modes = [
    {
        name: "Run",
        description: "Do 30 operations as fast as you can",
    },
    {
        name: "Bomb",
        description: "Do as many points as you can in 1 minute",
    },
    {
        name: "Survival",
        description: "Do as many points as you can with just 3 hearts",
    },
    {
        name: "Hardcore",
        description: "Like survival, but with just 1 heart",
    },
];

export default function TitleScreen(props) {
    const [hiddenClass, setHiddenClass] = useState('');
    const [modesAreVisible, setModesAreVisible] = useState(false);

    const start = () => {
        setHiddenClass('hidden');
    };

    const GameModeButton = ({ gamemode, description }) => (
        <Link to={`/mode/${gamemode.toLowerCase()}`} style={{ gridArea: gamemode.toLowerCase() }}>
            <button onClick={start}>
                {gamemode}
                <small>{description}</small>
            </button>
        </Link>
    );

    return (
        <>
            <Animation className={hiddenClass} />
            <button
                onClick={() => setModesAreVisible(false)}
                title="Back to the title"
                className="back-button"
                style={modesAreVisible ? {} : { opacity: 0, zIndex: -9999 }}
            >
                <img src={leftArrowImg} alt="Arrow pointing left" />
            </button>
            <section className={`titlescreen ${hiddenClass}`}>
                <div className={modesAreVisible ? "title hidden" : "title"}>
                    <h1>SwiftCalc</h1>
                    <p>Complete mathematical operations as fast as you can</p>
                    <button onClick={() => setModesAreVisible(true)}>Select a mode</button>
                    <div className='legal-info'>
                        <Link to="/privacy"><small>Privacy policy</small></Link>
                    </div>
                </div>
                {modesAreVisible && (
                    <div className="gamemodes">
                        <h1>Game modes</h1>
                        <div className="modes">
                            {modes.map((m) => (
                                <GameModeButton gamemode={m.name} description={m.description} key={m.name} />
                            ))}
                        </div>
                    </div>
                )}
            </section>
        </>
    );
}
