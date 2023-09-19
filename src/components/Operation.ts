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