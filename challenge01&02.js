//Challenge -01 and 02
function soma(a, b) {
    return a + b;
}

var somar = soma(10, 10) + 5;
//console.log(somar)

var svalor;

function add() {
    a = 2;
    return 'valor: ' + a;
}

svalor = add();

function arg(a, b, c) {
    if (a != undefined && b === undefined && c === undefined) {
        return a;
    }

    else if (a != undefined && b != undefined && c === undefined) {
        return a + b;
    }

    else if (a !== undefined && b !== undefined && c !== undefined) {
        return (a + b) / c;
    }

    else if (a == undefined && b == undefined && c == undefined) {
        return false;
    } else {
        return null;
    }
}

console.log(arg(1, 2, 3));

// =================================== Exercises ================================