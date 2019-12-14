var isTruthy = function (param) {
    return param ? true : false;
}

//console.log(isTruthy([]));

var carro = {
    marca: 'Mercedes',
    modelo: 'AMG',
    placa: 'russo',
    ano: 2018,
    cor: 'black',
    quantasPortas: 5,
    assentos: 5,
    quantidadePessoas: 0,

    mudarCor(cor) {
        carro.cor = cor;
    },

    obterCor() {
        return carro.cor;
    },

    obterModelo() {
        return carro.modelo;
    },

    obterMarca() {
        return carro.marca;
    },

    obterMarcaModelo() {
        return 'Esse Carro é um ' + this.obterMarca() + ' ' + this.obterModelo();
    },

    addPessoas(num) {
        var totalPessoas = carro.quantidadePessoas + num;
        var cabemPessoas = carro.assentos - carro.quantidadePessoas;
        var singular = cabemPessoas === 1 ? ' pessoa' : ' pessoas';

        if (carro.quantidadePessoas === carro.assentos) {
            return 'O carro já está lotado!'
        }

        if (totalPessoas > carro.assentos) {
            return 'Só cabem mais ' + cabemPessoas + singular;
        }

        carro.quantidadePessoas += num;
        return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro!'
    }
}

console.log(carro.addPessoas(2));
console.log(carro.addPessoas(8));
console.log(carro.addPessoas(2));
console.log(carro.addPessoas(8));

// ==================================== Exercises ================================