(function () {
    /*
    Envolva todo o código desse desafio em uma IIFE.
    */

    /*
    Crie um array chamado numberObjects. Esse array deve ter 10 elementos. Cada
    elemento será um objeto no formato:
    { number: [NUMBER] }
    Os números devem ser de 1 a 10.
    Mostre esse array no console.
    */

    var numberObjects = []
    for (let i = 1; i <= 10; i++) {
        numberObjects.push({ number: i })
    }

    console.log('Number Objects Array:', numberObjects);

    /*
    Crie um array chamado `justNumbers`, que terá como elementos somente os
    números do array criado acima. Mostre esse novo array no console.
    */

    var justNumbers = numberObjects.map(element => {
        return (element.number);
    });

    console.log('\nJust Numbers:', justNumbers);

    /*
    Crie um novo array chamado `justMod2Or3`, que receberá do array criado acima
    somente os números que forem divisíveis por 2 ou 3. Mostre esse novo array
    no console.
    */

    var justMod2Or3 = justNumbers.filter(element => {
        return (element % 2 == 0 || element % 3 == 0)
    });

    console.log('\nJust module of division by 2 or 3:', justMod2Or3);

    /*
    Declare uma variável chamada operation que receba, do array criado acima,
    um valor reduzido pela seguinte operação:
    - Somar 1 ao último valor retornado;
    - Multiplicar o resultado pelo valor atual.
    O cálculo deve começar com zero.
    Mostre o resultado no console.
    */

    var operation = justMod2Or3.reduce((acc, curr) => {
        return (acc + 1) * curr;
        //2, 3, 4, 6, 8, 9, 10
    }, 0)

    console.log('\nOperation:', operation);

    /*
    Faça o mesmo cálculo passado acima, mas começando do último item para o
    primeiro. O nome da variável deve ser operation2. Mostre o resultado no
    console.
    */

    var operation2 = justMod2Or3.reduceRight((acc, curr) => {
        return (acc + 1) * curr;
    })

    console.log('\nOperation 2:', operation2);

    /*
    Crie um array chamado `name`. Cada elemento desse array deve ser uma sílaba
    do seu nome. Vamos reduzir esse array, juntando todas as sílabas, mas usando
    a "língua do P".
    PS.: Lembra da língua do "P"? Não? A língua do "P" é uma brincadeira
    infantil, onde você coloca a letra "P" antes de cada sílaba de uma palavra
    falada, como se você estivesse falando em código xD
    */

    var name = ['ju', 'ni', 'or']

    var pName = name.reduce((acc, curr, index) => {
        return acc + 'P' + curr;
    }, '')

    console.log('\nSeu nome na língua do "P":', pName);

    /*
    Crie uma variável chamada `inversedName`, que reduzirá o array em uma string
    e atribuirá o seu nome invertido (usando o array criado acima).
    */

    var inversedName = []

    inversedName = name.reduceRight((acc, curr) => {
        return acc + curr
    })

    console.log('\nInversed Name:', inversedName, name.reverse().join(''));

    /*
    Mostre no console o array `numberObjects`.
    */
    console.log('\nNumber objects', numberObjects);

    /*
    Verifique se existem em algum índice de numberObjects um objeto ìgual a
    { number: 2 }. Se houver, mostre no console:
    - "Existe um objeto { number: 2 } em numberObjects!"
    Senão, mostre a frase:
    - "Não existe um objeto { number: 2 } em numberObjects :("
    Consegue prever o resultado? Deixe uma mensagem no console tentando explicar
    o que acontece ;)
    */

    console.log('\nExiste um { number: 2 } em numberObjects?');

    var obj = numberObjects[1];

    if (numberObjects.indexOf(obj) > -1) {
        console.log('Existe um objeto { number: 2 } em numberObjects!')
    } else {
        console.log('Não existe um objeto { number: 2 } em numberObjects :(')
    }


    /*
    Fazendo o mesmo do exercício acima, mas começando a buscar do último índice,
    será que obtemos um resultado diferente? Faça a busca a partir do índice 2.
    */
    console.log('\nE buscando a partir do último índice, o { number: 2 } existe?');

    if (numberObjects.lastIndexOf(obj, 2) > -1) {
        console.log('Existe um objeto { number: 2 } em numberObjects!')
    } else {
        console.log('Não existe um objeto { number: 2 } em numberObjects :(')
    }

    /*
    Verifique se `justMod2Or3` é um array. Se for, mostre-o no console, no
    formato de String.
    */
    console.log('\njustMod2Or3 é um array? Se for, a representação dele em String é:');
    console.log(Array.isArray(justMod2Or3), justMod2Or3.toString());

}())