import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Switch from "./Switch";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/mode/:gamemode" element={<Switch />} />
            </Routes>
        </BrowserRouter>
    )
}