import { useState } from 'react';
import TitleScreen from './components/TitleScreen';

import './css/app.css';
import Run from './modes/Run';


function App() {
	const [gamemode, setGamemode] = useState('');

	return (
		<>
			<TitleScreen setGamemode={setGamemode}/>
			{gamemode === 'run' ? <Run /> : <></>}
		</>
	);
}

export default App;
