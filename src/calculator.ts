export abstract class calculator {
  static calculate(value: string) {
    const operatorRegex = /[*/+-]/g;
    const numbersRegex = /[-]?[0-9]+[.]?[0-9]*/g;

    const operator = value.match(operatorRegex);
    const numbers = value.match(numbersRegex);

    console.log(Array.isArray(numbers));

    if (
      !numbers ||
      !operator ||
      operator.length !== 1 ||
      numbers.length !== 2
    ) {
      return "Invalid input";
    }

    const [first, second] = numbers.map(number => parseInt(number));

    if (operator[0] == "+") {
      return first + second;
    }

    if (operator[0] == "*") {
      return first * second;
    }

    if (operator[0] == "/") {
      return first / second;
    }

    return first - second;
  }
}

export default calculator;
