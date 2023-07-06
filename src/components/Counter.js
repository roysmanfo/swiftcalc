import "../css/components/counter.css"


export default function Counter(props) {

    let currOP = props.curentOperation;
    let totOP = props.totalOperations || null;

    switch (props.mode) {
        case 'run':
            return (
                <div className="counter">
                    {currOP} / {totOP}
                </div>
            )

        case 'bomb':
        case 'survival':
        case 'hardcore':
            return (
                <div className="counter">
                    {currOP}
                </div>
            )

        default: return (<></>)
    }
}