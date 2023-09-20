import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import TitleScreen from './components/TitleScreen';
import { useParams } from "react-router-dom";

import './css/app.css';
import "./css/responsive.css"
import Privacy from "./pages/Privacy";
import Loading from "./components/Loading";

const Run = lazy(() => import('./modes/Run'));
const Bomb = lazy(() => import('./modes/Bomb'));
const Survival = lazy(() => import('./modes/Survival'));
const Hardcore = lazy(() => import('./modes/Hardcore'));

export default function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<Loading />}>

				<Routes>
					<Route path="/" element={<TitleScreen />} />
					<Route path="/privacy" element={<Privacy />} />
					<Route path="/mode/:gamemode" element={<Switch />} />
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}

function Switch() {
	const { gamemode } = useParams();

	switch (gamemode) {
		case 'run': return <Run />;
		case 'bomb': return <Bomb />;
		case 'survival': return <Survival />;
		case 'hardcore': return <Hardcore />;
		default: return <App />;
	}
}
