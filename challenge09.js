(function () {

    /* Analise as funções abaixo(`myFunction`, `myFunction2` e`myFunction3`, e
    ajuste o posicionamento das variáveis e funções internas, para que os códigos
    dentro de`console.log` que estão retornando`undefined` retornem o valor
    correto da variável ou função chamada.
    */

    function myFunction() {
        var number1 = 10; // this two variables was at the bottom.
        var number2 = 20;
        console.log('Na função `myFunction`, o primeiro número é', number1);
        console.log('Na função `myFunction`, o segundo número é', number2);

        return number1 + number2;

    }
    myFunction();

    console.log('--------------------------------------------------------------');

    function myFunction2() {
        var number1 = 10;
        var number2 = 20;

        var sum = function sum() {
            return number1 + number2;
        };

        console.log('A soma de 10 e 20 é igual a', sum ? sum() : undefined);

        return sum();
    }
    myFunction2();

    console.log('--------------------------------------------------------------');

    function myFunction3() {
        var number1 = 40;
        var number2 = 50;

        console.log('A soma de 40 e 50 é igual a', sum());
        console.log('Na função myFunction3, number1 é igual a', number1);

        function sum() {
            return number1 + number2;
        };

        return sum();
    }
    myFunction3();

    console.log('--------------------------------------------------------------');
    /*    
    - Crie uma função `calculator` que recebe dois valores (números)
    por parâmetro.
    - Essa função deve retornar uma outra função, que recebe um parâmetro
    chamado `callback`.
    - Esse `callback` será uma função, que passaremos por parâmetro ao invocar
    o retorno de `calculator`.
    - O retorno dessa segunda função deve ser a função de `callback` passada
    por parâmetro, INVOCADA, e passando a ela por parâmetro os dois valores
    que foram passadas para a primeira função `calculator`.
    */

    function calculator(num1, num2) {
        return function (callback) {
            return callback(num1, num2);
        };
    }

    var sum = calculator(18, 10);
    console.log('O resultado da soma é: ' + sum(function (a, b) {
        return a + b;
    }));

    // Sabemos que `sum` agora tem uma função atribuída a ela, que é o retorno de
    // `calculator`. E essa função espera um parâmetro `callback`. O `callback`
    // tem dois parãmetros disponíveis, que são os números que você acabou de passar
    // para a chamada à `calculator` acima.
    // - Mostre no console o retorno da invocação de `sum`, passando por parâmetro
    // uma função anônima que irá retornar a soma dos dois números que essa função
    // anônima tem como seus argumentos.

    var min = calculator(10, 10);
    console.log('O resultado da subtração é: ' + min(function (a, b) {
        return a - b;
    }));

    var mul = calculator(10, 10);
    console.log('O resultado da multiplicação é: ' + mul(function (a, b) {
        return a * b;
    }));

    var div = calculator(10, 10);
    console.log('O resultado da divisão é: ' + mul(function (a, b) {
        return a / b;
    }));

    var mod = calculator(10, 10);
    console.log('O resto da divisão é: ' + mul(function (a, b) {
        return a % b;
    }));
})();