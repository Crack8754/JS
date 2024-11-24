function Factorial(n) {
    if (n < 0) {
        return "ноу ноу ноу містер фіш.";
    }
    let factorial = 1;
    for (let i = 1; i <= n; i++) {
        factorial *= i;
    }
    return factorial;
}

console.log(Factorial(7)); 
console.log(Factorial(-1)); 

function numberParity(number) {
    if (number % 2 === 0) {
        return `${number} є парним.`;
    } else {
        return `${number} є непарним.`;
    }
}

console.log(numberParity(1)); 
console.log(numberParity(2)); 

function findMaxNumber(a, b, c) {
    if (a === b && b === c) {
        return "Всі числа однакові.";
    }
    return `Найбільше число: ${Math.max(a, b, c)}`;
}

console.log(findMaxNumber(1, 99999999999999, 6)); 
console.log(findMaxNumber(9, 9, 9)); 

function calculator(a, b, operation) {
  
    const operations = {
        '+': a + b,
        '-': a - b,
        '*': a * b,
        '/': a / b
    }
    return operations[operation];
}

console.log(calculator(146, 14, '+')); 
console.log(calculator(25, 5, '/'));
console.log(calculator(1, 1, '-'));
console.log(calculator(3, 3, '*'));