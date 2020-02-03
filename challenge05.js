var array = [100, 22, 37, 45, 75];

// function myFunction(arr){
//     return arr;
// }

// console.log(myFunction(array[2]));

// function myFunction(arr, num){
//     return arr[num];
// }

// console.log(myFunction(array, 4));

var mixedArray = ['Demis', true, 93522, null, 'ok'];
// console.log(myFunction(mixedArray, 0));

function book(bookName) {
    var allBooks = {
        'demisrusso': {
            quantidadePaginas: 30,
            autor: 'Demis Russo',
            editora: 'São Paulo',
        },

        'eltonjohn': {
            quantidadePaginas: 360,
            autor: 'Elton John',
            editora: 'California',
        },

        'lagum': {
            quantidadePaginas: 360,
            autor: 'Lagum team',
            editora: 'Rio de Janeiro',
        },
    };

    if (bookName) {
        console.log(`O livro ${bookName} tem ${allBooks[bookName].quantidadePaginas}  paginas`);
        console.log(`O autor do livro ${bookName} é ${allBooks[bookName].autor}`);
        console.log(`O livro ${bookName} foi publicado pela editora ${allBooks[bookName].editora}`);
        return allBooks[bookName];
    }

    return allBooks;
}

console.log(book('lagum'));

// ==================================== Exercises ================================