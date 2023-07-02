import React from "react";
import { useParams } from "react-router-dom";
import Run from "./modes/Run";

export default function Switch(){
    const { gamemode } = useParams();
    
    switch(gamemode){
        case 'run': return <Run />;
        default: return <></>;
    }
}
