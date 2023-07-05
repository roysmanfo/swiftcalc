import { useState } from "react"
import "../css/components/countdown.css"


export default function Countdown(){
    const [count, setCount] = useState(3); 
    
    for(let i = 3; i !== 0; i--){
        setTimeout(() => {setCount(count - 1)}, 1000);
    }

    return(
        <div className={`countdown${count < 0 ? " hidden" : ""}`}>
            <p className="count pretty">{count > 0 ? count : "START"}</p>
        </div>
    )
}

