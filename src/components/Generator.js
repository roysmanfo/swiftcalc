import { Operation } from "./Operation.ts";

export default function generateOperations(max) {
    const allOperations = [];
    const signs = ['+', '-', '*', '/'];
    let v1;
    let v2
    let sign;
    let limit;
    
    for (let i = 0; i < max; i++) {
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

        allOperations.push(new Operation(v1, v2, sign, res, false));
        res = 9999;
    }

    return allOperations;
}