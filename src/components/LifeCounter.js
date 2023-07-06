import "../css/components/lifecounter.css"
import heart from "../img/svg/heart.svg"
import "../css/responsive.css"


export default function LifeCounter(props) {
    const hearts = [];
    function Hearts() {
        for (let i = 0; i < props.lifes; i++) {
            hearts.push(<img key={i} src={heart} alt="red filled heart" />)
        }
        return hearts;
    }
    return (
        <div className={`life-counter${props.completed ? " hidden" : ""}${props.lifes === 1 ? " red" : ""}`}>{Hearts().map((e => e))}</div>
    )
} 