import React from "react";
import { useParams } from "react-router-dom";
import Run from "./modes/Run";
import Bomb from "./modes/Bomb";

export default function Switch(){
    const { gamemode } = useParams();
    
    switch(gamemode){
        case 'run': return <Run />;
        case 'bomb': return <Bomb />;
        default: window.location.href = '/';
    }
}
