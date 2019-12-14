var championship = 'mundial';
//console.log(championship);

var teams = ['flamengo', 'gremio', 'sp', 'botafogo', 'cruzeiro'];

//console.log( 'Times que estão participando do campeonato:', teams );

function showTeamPosition(num) {
    if (num > 0 && num <= 4)
        return 'O time que está em ' + num + 'º lugar é o ' + teams[num - 1] + '.';
    return 'Não temos a informação do time que está nessa posição.';
}

console.log(showTeamPosition(1));
console.log(showTeamPosition(0));
console.log(showTeamPosition(3));
console.log(showTeamPosition(6));
console.log('-----------------------------------');

// var a = 20;
// while (a <= 30) {
//     console.log(a++);
// }

console.log('-----------------------------------');

function convertToHex(color) {
    var hexa;

    switch (color) {
        case 'red':
            hexa = 'FF2D00';
            break;
        case 'blue':
            hexa = '0017FF';
            break;

        case 'green':
            hexa = 'FF2D00';
            break;

        case 'yellow':
            hexa = 'F7FF00';
            break;

        case 'purple':
            hexa = 'FB00FF';
            break;

        default:
            return 'Não temos o equivalente hexadecimal para ' + color + '.';
    }
    
    return 'O hexadecimal para a cor ' + color + ' é ' + hexa;    
}

console.log(convertToHex('red'));

// ==================================== Exercises ================================