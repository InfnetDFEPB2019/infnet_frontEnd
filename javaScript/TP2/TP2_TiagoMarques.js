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


// ********************** ALGORITIMO 4 *******************************
console.log("***** Iniciando Algoritimo 04 *****")


// ********************** ALGORITIMO 5 *******************************
console.log("***** Iniciando Algoritimo 05 *****")