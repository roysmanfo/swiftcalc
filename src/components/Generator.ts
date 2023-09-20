/**
 * Generate operations
 */

/**
 * Class to manage each single operation
 */
export class Operation{
    val1: number;
    val2: number;
    sign: string;
    result: number;
    guessed: boolean;

    constructor(val1: number, val2: number, sign: string, result: number, guessed: boolean){
        this.val1 = val1;
        this.val2 = val2
        this.sign = sign;
        this.result = result;
        this.guessed = guessed;
    }

    toString(){
        return `${this.val1} ${this.sign} ${this.val2}`
    }
}


/**
 * This function takes in a number (n) and returns a list of n Operation objects.
 * @param n the maximum number of operations to return
 * @returns a list of n Operation objects
 */
export default function generateOperations(n: number): Operation[] {
    const allOperations: Operation[] = [];
    const signs = ['+', '-', '*', '/'];
    let v1: number = 0;
    let v2: number = 0;
    let sign: string = "";
    let limit: number = 0;
    
    for (let i = 0; i < n; i++) {
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