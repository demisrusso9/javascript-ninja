// Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
// o código, conforme vimos na aula anterior. Quebrar as responsabilidades
// em funções, onde cada função faça somente uma única coisa, e faça bem feito.

// - Remova as duplicações de código;
// - agrupe os códigos que estão soltos em funções (declarações de variáveis,
// listeners de eventos, etc);
// - faça refactories para melhorar esse código, mas de forma que o mantenha com a
// mesma funcionalidade.


(function () {
    'use strict'

    var $input = document.querySelector('input[type="text"]');
    var $buttonsNumbers = document.querySelectorAll('[data-js="btn-num"]')
    var $buttonsOperators = document.querySelectorAll('[data-js="btn-op"]')
    var $ce = document.querySelector('[data-ce="clear"]');
    var $buttonCalc = document.querySelector('[data-js="equal"]');

    function initialize() {
        initEvents();
    }

    function initEvents() {
        $buttonsNumbers.forEach((button) => {
            button.addEventListener('click', numbersClicked, false);
        })
        $buttonsOperators.forEach((operator) => {
            operator.addEventListener('click', operatorClicked, false);
        });
        $ce.addEventListener('click', buttonCE, false)
        $buttonCalc.addEventListener('click', calculate, false);
    }

    function numbersClicked() {
        $input.value += this.value;
    }

    function operatorClicked() {
        $input.value = removeLastItem($input.value);
        $input.value += this.value;
    }

    function removeLastItem(string) {
        if (isLastItemAnOp(string))
            return string.slice(0, -1)
        return string;
    }

    function isLastItemAnOp(number) {
        var operations = getOperations();
        var lastItem = number.split('').pop()

        return operations.some((element) => {
            return element === lastItem;
        })
    }

    function getOperations() {
        return Array.prototype.map.call($buttonsOperators, (operator) => {
            return operator.value;
        })
    }

    function buttonCE() {
        $input.value = 0;
    }

    function calculate() {
        $input.value = removeLastItem($input.value)
        var allValues = $input.value.match(getRegexOperation());
        $input.value = allValues.reduce(calculateAllValues)
    }

    function getRegexOperation() {
        return new RegExp('\\d+[' + getOperations().join() + ']?', 'g')
    }

    function calculateAllValues(acc, curr) {
        var firstValue = acc.slice(0, -1);
        var operator = acc.split('').pop();
        var lastValue = removeLastItem(curr);
        var lastOperation = isLastItemAnOp(curr) ? curr.split('').pop() : '';

        return doOperation(operator, firstValue, lastValue) + lastOperation;
    }

    function doOperation(operator, firstValue, lastValue) {
        switch (operator) {
            case '+':
                return Number(firstValue) + Number(lastValue);
            case '-':
                return Number(firstValue) - Number(lastValue);
            case '*':
                return Number(firstValue) * Number(lastValue);
            case '/':
                return Number(firstValue) / Number(lastValue);
        }
    }

    initialize();
})()


/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:
- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);

- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;
- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/
