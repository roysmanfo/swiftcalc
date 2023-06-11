import { useEffect, useState } from 'react';
import TitleScreen from './componenets/TitleScreen';

import './css/app.css';


function App() {
	const [gamemode, setGamemode] = useState('');

	useEffect(() => {
		console.log(gamemode);
	}, [gamemode]);

	return (
		<>
			<TitleScreen setGamemode={setGamemode}/>

		</>
	);
}

export default App;
