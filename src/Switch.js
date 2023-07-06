import React from "react";
import { useParams } from "react-router-dom";
import Run from "./modes/Run";
import Bomb from "./modes/Bomb";
import Survival from "./modes/Survival";

export default function Switch(){
    const { gamemode } = useParams();
    
    switch(gamemode){
        case 'run': return <Run />;
        case 'bomb': return <Bomb />;
        case 'survival': return <Survival />;
        default: window.location.href = '/';
    }
}
