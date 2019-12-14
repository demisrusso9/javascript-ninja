var pessoa = {
    nome: 'Maria',
    sobrenome: 'Lith',
    sexo: 'Feminino',
    idade: 26,
    altura: 1.76,
    peso: 60,
    andando: false,
    caminhouMetros: 0,

    fazerAniversario() {
        pessoa.idade++;
    },

    andar(metros) {
        pessoa.caminhouMetros += metros;
        pessoa.andando = true;
    },

    parar() {
        pessoa.andando = false;
    },

    nomeCompleto() {
        return 'Olá, meu nome é ' + pessoa.nome + ' ' + pessoa.sobrenome;
    },

    mostrarIdade() {
        return 'Eu tenho ' + pessoa.idade + ' anos';
    },

    apresentacao() {
        var sexo = pessoa.sexo === 'Feminino' ? 'a ' : 'o';
        var idade = pessoa.idade === 1 ? 'ano' : 'anos';
        var caminhou = pessoa.caminhouMetros === 1 ? 'metro' : 'metros';
        
        return 'Olá, eu sou ' + sexo + pessoa.nome + ' ' + pessoa.sobrenome + ', tenho ' + pessoa.idade + ' ' + idade + ', ' + pessoa.altura +
            ', meu peso é ' + pessoa.peso + ' e, só hoje, eu já caminhei ' + pessoa.caminhouMetros + ' ' + caminhou + '!';
    }
};

pessoa.fazerAniversario();
pessoa.andar(10);
pessoa.parar();

console.log(pessoa.idade);
console.log(pessoa.andando);
console.log(pessoa.caminhouMetros);
console.log(pessoa.nomeCompleto());
console.log(pessoa.mostrarIdade());

pessoa.andar(100);
pessoa.parar();
console.log(pessoa.andando);
console.log(pessoa.caminhouMetros);
console.log(pessoa.apresentacao());

// ==================================== Exercises ================================
