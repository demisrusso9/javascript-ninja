var arr = [null, true, 'hello', 900, undefined];

function addItem(item) {
    arr.push(item);
    return arr;
}

addItem('demisrusso');
console.log(arr);

arr.push([{ name: 'demis' }, function test() { }, false]);
console.log(arr);

console.log('O segundo elemento do segundo array é ' + arr[6][1]);

console.log('O primeiro array tem ' + arr.length + ' itens');
console.log('O segundo array tem ' + arr[6].length + ' itens');

//Using While Loop
var num = 10;
console.log('-----');

console.log('Números pares entre 10 e 20:');
while (num <= 20) {
    if (num % 2 === 0)
        console.log(num);

    num++;
}

var num = 10;
console.log('----');

console.log('Números impares entre 10 e 20:');
while (num <= 20) {
    if (num % 2 !== 0)
        console.log(num);

    num++;
}

//Using For Loop
console.log('-----');

console.log('Números pares entre 100 e 120:');

for (num = 100; num <= 120; num++) {
    if (num % 2 == 0)
        console.log(num)
}

console.log('Números ímpares entre 111 e 125:');
for (num = 111; num <= 125; num++) {
    if (num % 2 == 1)
        console.log(num)
}

// ==================================== Exercises ================================

