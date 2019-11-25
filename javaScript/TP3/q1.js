questao1();

function questao1 () { 
    var pai = document.getElementById("q1");

    var titulo = document.createElement("h1");
    titulo.textContent = "Questão 1";
    titulo.id = "titulo";

    var labelMin = document.createElement("label");
    labelMin.textContent = "Valor Mínimo";
    labelMin.id = "label";

    var labelMax = document.createElement("label");
    labelMax.textContent = "Valor Máximo";
    labelMax.id = "label";

    var inputMin = document.createElement("input");
    inputMin.type = "number";
    inputMin.id = "valorMin";
    inputMin.addEventListener("blur", validaValor, false);

    var inputMax = document.createElement("input");
    inputMax.type = "number";   
    inputMax.id = "valorMax";
    inputMax.addEventListener("blur", validaValor, false);

    var btnCalcular = document.createElement("button");
    btnCalcular.textContent = "Calcular";
    btnCalcular.id = "btn";
    btnCalcular.addEventListener("click", calcular, false);

    var labelFinal = document.createElement("labe");
    labelFinal.id = "labelFinal";
  
    pai.appendChild(titulo);
    pai.appendChild(labelMin);
    pai.appendChild(inputMin);
    pai.appendChild(labelMax);
    pai.appendChild(inputMax);
    pai.appendChild(btnCalcular);
    pai.appendChild(labelFinal);
    
};

function validaValor () {
    var valMin = document.getElementById("valorMin").value;
    var valMax = document.getElementById("valorMax").value;
    var labelFinal = document.getElementById("labelFinal");

    if (valMax != "") {
        var max = parseInt(valMax);
        var min = parseInt(valMin);
        if (valMin == "" || valMax == ""){
            alert("Nenhum dos campos não podem estar vaxios");
        }else {
            if (min >= max) {
                alert("Valor Minimo não pode ser maior ou igual ao valor Máximo");
            }            
        }

    }
};

function calcular() {
    var valMin = document.getElementById("valorMin").value;
    var valMax = document.getElementById("valorMax").value;
    let min = parseInt(valMin);
    let max = parseInt(valMax);
    var labelFinal = document.getElementById("labelFinal");   

    var contador = 0 ;
    var indice = min + 1;

    while (indice < max){
        if (indice%3==0 && indice%2==0){
            contador ++ ;
            indice ++ ;
        } else {
            indice ++ ;
        }
    }
    
    labelFinal.textContent = "Número de múltiplos de 2 e 3 simultaneamente entre " + min +" e " + max + " é de: " + contador;

    
}

 
    
