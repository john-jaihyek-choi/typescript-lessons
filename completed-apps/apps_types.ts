function sum(num1: number, num2: number, showResult: boolean, phrase: string) {
    const result = num1 + num2;
    if(showResult) {
        console.log(phrase + result);
    } else {
        return result;
    }
}

const number1 = 5;
const number2 = 2.5;
const showResult = true;
const resultPhrase = "Result is: ";

const result = sum(number1, number2, showResult, resultPhrase);

console.log(result);