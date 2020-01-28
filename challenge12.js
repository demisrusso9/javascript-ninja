(function () {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE.
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    var person = {
        name: 'Demis',
        lastname: 'Junior',
        age: 20,
    }

    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log('Propriedades de "person": ', Object.keys(person));

    /*
    Crie um array vazio chamado `books`.
    */
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */

    // var livro1 = {
    //     name: 'JavaScript',
    //     pages: 100
    // }

    // var livro2 = {
    //     name: 'Node',
    //     pages: 300
    // }

    // var livro3 = {
    //     name: 'Java',
    //     pages: 200
    // }

    //books.push(livro1, livro2, livro3)

    books.push({ name: 'JavaScript', pages: 100 })
    books.push({ name: 'Node', pages: 500 })
    books.push({ name: 'Java', pages: 200 })

    /*
    Mostre no console todos os livros.
    */

    console.log('\nLista de livros: ', books);

    /*
    Remova o último livro, e mostre-o no console.
    */

    console.log('\nLivro que está sendo removido: ', books.pop());

    /*
    Mostre no console os livros restantes.
    */

    console.log('\nAgora sobraram somente os livros: ', books);

    /*
    Converta os objetos que ficaram em `books` para strings.
    Mostre os livros nesse formato no console:
    */

    console.log('\nLivros em formato string: ', JSON.stringify(books));

    var srtConvert = JSON.stringify(books)

    /*
    Converta os livros novamente para objeto.
    */

    console.log('\nAgora os livros são objetos novamente:', JSON.parse(srtConvert));

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
    "[PROPRIEDADE]: [VALOR]"
    */
    console.log('------------------------------------')

    // or i < Object.keys(books).length, properties of book
    for (let i = 0; i < books.length; i++) {
        for (let prop in books[i]) {
            console.log(prop + ':' + books[i][prop]);
        }
    }

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    
    var myName = ['D', 'e', 'm', 'i', 's', , 'R', 'u', 's', 's', 'o'];
    console.log('\nMeu nome é: ', myName);

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log(myName.join(' '));

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */

    console.log('\nMeu nome invertido é:', myName.reverse());

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

    //Uppercase letters come first, this is why 'R' come first than 'e' (ASC)
    console.log('\nAgora em ordem alfabética:', myName.sort());
    
})();