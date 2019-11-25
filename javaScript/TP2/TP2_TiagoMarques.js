// ********************** ALGORITIMO 1 *******************************
console.log("***** Iniciando Algoritimo 01 *****")

var contador = 0
for (i = 1; i<1000; i++){
    if(i % 2 == 0 || i % 3 == 0){
        contador++
    }
}
console.log("Existem " + contador + " números múltiplos de 2 e 3 entre 1 e 1000 \n")

// ********************** ALGORITIMO 2 *******************************
console.log("***** Iniciando Algoritimo 02 *****")

var antes = Date.now();
let num = 53

var fatorial=1;
var explicaFator = '';

for(var x=1; x<=num; x++){
    fatorial=fatorial*x;
    if(explicaFator != ''){
        explicaFator += 'x';
    }
explicaFator += x;
}

var tempo = Date.now() - antes;

console.log(num + "! = " + explicaFator + " = " + fatorial + " Tempo: " + tempo + "ms \n")
    

// ********************** ALGORITIMO 3 *******************************
console.log("***** Iniciando Algoritimo 03 *****")
var alunos = [];
alunos = gerarAlunos();

var alunosAprovados = 0
var alunosReprovados= 0

alunos.forEach(function(aluno){        
    console.log("Aluno nr: " + aluno.matricula + " Nota : " + aluno.nota)

    if(aluno.nota <= 50){
        alunosReprovados++
    }else {
        alunosAprovados++
    }
})

console.log("APROVADOS: " + alunosAprovados*100/20 + "%" + " REPROVADOS: " + alunosReprovados*100/20 + "% \n")

function gerarAlunos(){
    var novosAlunos = [];
    class Aluno {
        constructor(matricula, nota) {
          this.matricula = matricula;
          this.nota = nota;
        }
      }

    var x = 1;

    while(x < 21){
        let aluno = new Aluno(x, getRandom(100));
        novosAlunos.push(aluno);
        x++;
    }

    return novosAlunos;
}

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}

// ********************** ALGORITIMO 4 *******************************
console.log("***** Iniciando Algoritimo 04 *****")

let max = 5000
let min = 0
let tamanhoArray = 1000
var array = []

for (var i=0; i<tamanhoArray; i++){
    sucess = false
    while(!sucess){
        var n = geraRandom(max, min);
        if(array.indexOf(n) < 0){
            array.push(n)
            sucess = true
        }
    }
}

function ordenarArray(arr){
    let array = new Array();
    array = arr;
    var arrayOrdenado = array.sort(compararNumeros); 

    return arrayOrdenado;
}

function geraRandom(max, min){
    number = Math.floor(Math.random() * (max - min + 1) + min);
    return number;
}

function compararNumeros(a, b) {
    return a - b;
}

var arrayOrdenado = ordenarArray(array)
console.log(arrayOrdenado)

// ********************** ALGORITIMO 5 *******************************
console.log("***** Iniciando Algoritimo 05 *****")
var resultado = ""

function calcular(a, b, c){
    
    if (a<b+c && b<a+c && c<a+b) {
        if (a==b && b==c) {
            resultado = 'TRIANGULO EQUILÁTERO';
        } else {
            if (a==b || a==c || c==b) {
                resultado = 'TRIANGULO ISÓSCELES';
            } else {
                resultado = 'TRIANGULO ESCALENO';
            }
        }
    } else {
        resultado = 'NÃO É UM TRIANGULO.';
    }
}

calcular(5,5,5)
console.log("Medidas das laterais: 5, 5, 5 -> " + resultado + "\n")

calcular(45,45,90)
console.log("Medidas das laterais: 45, 45, 90 -> " + resultado + "\n")

calcular(25,35,45)
console.log("Medidas das laterais: 25, 35, 45-> " + resultado + "\n")



console.log("https://github.com/tdsmarques/infnet_frontEnd")