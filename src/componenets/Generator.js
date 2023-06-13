import React from "react";


function Operation(props) {
    return (
        <div className={`operation${props.guessed ? " guessed" : ""}`}>
            <p>{props.val1} {props.sign} {props.val2} = {props.res}</p>
        </div>
    )
}

export default function generateOperations() {
    const allOperations = [];
    const signs = ['+', '-', '*', '/'];
    let v1;
    let v2
    let sign;
    let limit;
    
    for (let i = 0; i < 20; i++) {
        let res = 9999;
        while (res > 40) {
            sign = signs[Math.round(Math.random() * (signs.length - 1))];
            sign === '*' || sign === '/' ? limit = 10 : limit = 50;

            v1 = Math.round(Math.random() * limit);


            do {
                sign === '/' ? v2 = Math.round(Math.random() * (limit / 2)) * v1 : v2 = Math.round(Math.random() * limit);
            } while ((v2 > v1 && Math.round(v1 / v2) !== v1 / v2) || (sign === '/' && v2 === 0))

            switch (sign) {
                case '+': res = v1 + v2; break;
                case '-': res = v1 - v2; break;
                case '*': res = v1 * v2; break;
                default: res = v1 / v2; break;
            }
        }

        allOperations.push(<Operation val1={v1} val2={v2} sign={sign} res={res} guessed={false} />);
        res = 9999;
    }

    return allOperations;
}