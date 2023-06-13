import { useState } from 'react';
import TitleScreen from './componenets/TitleScreen';

import './css/app.css';
import Classic from './modes/Classic';


function App() {
	const [gamemode, setGamemode] = useState('');

	return (
		<>
			<TitleScreen setGamemode={setGamemode}/>
			{gamemode === 'run' ? <Classic /> : <></>}
		</>
	);
}

export default App;
