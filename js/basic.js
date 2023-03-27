console.log('Olá, Javascript!')

var userName = 'Paulo de Souza'
document.getElementById('userName').innerHTML = userName




// Em JS a tipagem é dinamica 
/* var nome = 'Mestre Yoda'
var idade = 100
var jedi = true */


/* Para as operações matemáticas básicas são utilizados os seguintes, adição(+), subtração(-), multiplicação(*) e divisão(/).

//Adição
2+2 //4
2.3+4 //6.3
1.5+1.5 //3

//Subtração

2-2 //0
8-5 //3
3.2-1 //2.2

//Multiplicação
2*3 //6
1.5*2 //3

//Divisão
1/2 //0.5
1.5/2 //0.75
2/0 //Infinity */


// COMPARATIVOS:


/* Igual (==)
Retorna verdadeiro se os valores comparados forem iguais.
1=='1' //true

Não igual (!=)
Retorna verdadeiro se os valores comparados não forem iguais. Esse operador também pode ser chamado de diferente de.
4!=1 //true

Igual estrito (===)
Esse operador é mais severo, só retorna verdadeiro se o valor e o tipo comparados forem iguais.
3==='3' //false
3===3 //true

Não igual estrito (!==)
Não se engane, esse operador vai retornar verdadeiro se os valores e ou os tipos forem diferentes
3!=='3' //true
3!==3 //false
3!==4 //true

Maior que (>)
Compara se o operador da esquerda é maior que o da direita. Caso seja retorna verdadeiro
1>2 //false
5>3 //true
4>'1' //true

Maior ou igual que (>=)
Compara se o operador da esquerda é maior ou igual ao da direita. Caso seja retorna verdadeiro
1>=2 //false
5>=3 //true
4>='1' //true
2>=2 // true

Menor que (<)
Compara se o operador da esquerda é menor que o da direita. Caso seja retorna verdadeiro

1<2 //true
5<3 //false
4<'1' //false    

Menor ou igual que (<=)
Compara se o operador da esquerda é menor ou igual ao da direita. Caso seja retorna verdadeiro

1<=2 //true
5<=3 //false
4<='1' //false
2<=2 // true */

// Funções //

/* function soma(n1, n2){
    console.log(n1 + n2)
}

soma(5, 5) */

/* function boasVindas(nome){
    alert(nome + ', seja bem vindo(a)')
}

boasVindas('Paulo') */

/* function soma(n1, n2){
    return n1 + n2
}

var resultado = soma(5,5)
console.log(resultado) */

// Controle de fluxos //

/* var saldo = 1000

function saque(valor){
    if (valor > saldo){
        console.log('Valor do saque superior ao saldo')
    } else if (valor > 700){
        console.log ('Valor do saque é superior ao máximo permitido')
    } else {
        saldo = saldo - valor
    }
}

saque(699)
console.log(saldo) */

// Arrays começam com ZERO //

/* var gaveteiro = ['Meias', 'Gravatas', 'Documentos', 'Salgadinhos']

console.log(gaveteiro[0]) */

/* var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa leia', 'Darth Vader']

personagens.push('C3po') // Adiciona
personagens.push('R2D2') */

/* personagens.pop() */ // Tira o ultimo da lista

/* personagens = personagens.filter(function(p){
    return p !== "Darth Vader"
})

personagens = personagens.filter(function(p){
    return p == "Mestre Yoda"
})

console.log(personagens) */

// Controles de repetição (loops, laços) //
/* 
var personagens = ['Mestre Yoda', 'Luke Skywalker', 'Princesa leia', 'Darth Vader', 'R2D2'] */

/* personagens.forEach(function(p){
    console.log(p)
}) */
/* 
for (var i in personagens) {
    console.log(personagens[i])
} */
/* 
for(var i = 0; i <= 10; i++) {
    console.log(i)

    //Roda até a condição retornar false.
} */

// Objetos //
 
/* var yoda = {
    nome: 'Mestre yoda',
    idade: 100,
    jedi: true,
    mostraIdade: function(){
        console.log(`A idade do ${this.nome} é ${this.idade} anos.`)
    }
}

console.log(yoda)
yoda.mostraIdade */

// Constantes //

const nome = 'Darth Vader'
console.log(nome)

