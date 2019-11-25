questao5();

function questao5 () { 
    var pai = document.getElementById("q5");

    var titulo = document.createElement("h1");
    titulo.textContent = "Questão 5";
    titulo.id = "titulo";

    var labelA = document.createElement("label");
    labelA.textContent = "Lado A";
    labelA.id = "label";
    
    var ladoA = document.createElement("input");
    ladoA.type = "number";
    ladoA.id = "ladoA";    

    var labelB = document.createElement("label");
    labelB.textContent = "Lado B";
    labelB.id = "label";
    
    var ladoB = document.createElement("input");
    ladoB.type = "number";
    ladoB.id = "ladoB";  

    var labelC = document.createElement("label");
    labelC.textContent = "Lado C";
    labelC.id = "label";
    
    var ladoC = document.createElement("input");
    ladoC.type = "number";
    ladoC.id = "ladoC";  


    var btnCalcular = document.createElement("button");
    btnCalcular.textContent = "Calcular";
    btnCalcular.id = "btn";
    btnCalcular.addEventListener("click", calcular, false);

    var labelFinal = document.createElement("label");
    labelFinal.id = "labelTriangulo";

    pai.appendChild(titulo);
    pai.appendChild(labelA);
    pai.appendChild(ladoA);
    pai.appendChild(labelB);
    pai.appendChild(ladoB);
    pai.appendChild(labelC);
    pai.appendChild(ladoC);
    pai.appendChild(btnCalcular);
    pai.appendChild(labelFinal);    
};

function calcular(){
    var ladoA = document.getElementById("ladoA").value;
    var ladoB = document.getElementById("ladoB").value;
    var ladoC = document.getElementById("ladoC").value;

    var label = document.getElementById("labelTriangulo");

    let a = parseInt(ladoA); 
    let b = parseInt(ladoB);
    let c = parseInt(ladoC);

    var resultado = "";

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

    label.textContent = resultado;
    

}