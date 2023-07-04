import "../css/components/counter.css"


export default function Counter(props){

    let currOP = props.curentOperation;
    let totOP = props.totalOperations || null;

    if (props.mode === 'run')
        return(
            <div className="counter">
                {currOP} / {totOP}
            </div>
        )

    return (<></>)
}