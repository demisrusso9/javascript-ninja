var soma = function calculateSum(a, b) {
    return a + b;
};

var a = 5;
var b = 15;

console.log('A soma de ' + a + ' e ' + b + ' é igual a ' + soma(a, b));
console.log('O nome da função que faz a soma é ' + soma.name + '.');
console.log('-----------------------------');

function showName() {
    return 'demisrusso';
}

var varShowName = showName;

console.log('A função ' + varShowName.name + ' retorna ' + varShowName());

console.log('-----------------------------');


function calculator(op) {
    return function (num1, num2) {
        let resul;
        switch (op) {
            case '+':
                resul = num1 + num2;
                break;
            case '-':
                resul = num1 - num2;
                break;
            case '*':
                resul = num1 * num2;
                break;
            case '/':
                resul = num1 / num2;
                break;
            case '%':
                resul = num1 % num2;
                break;
            default:
                return 'Operação inválida';
        }

        return 'Resultado da operação: ' + num1 + ' ' + op + ' ' + num2 + ' = ' + resul;
    };
}

var sum = calculator('+');
var min = calculator('-');
var mul = calculator('*');
var div = calculator('/');
var mod = calculator(12);

console.log(sum(10, 10));
console.log(min(12, 10));
console.log(mul(12, 10));
console.log(div(12, 10));
console.log(mod(12, 10));