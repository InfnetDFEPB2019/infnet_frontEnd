questao4();

function questao4 () { 
    var pai = document.getElementById("q4");

    var titulo = document.createElement("h1");
    titulo.textContent = "Questão 4";
    titulo.id = "titulo";

    var qtdNumeros = document.createElement("label");
    qtdNumeros.textContent = "Qtd de Números";
    qtdNumeros.id = "label";
    
    var inputNumeros = document.createElement("input");
    inputNumeros.type = "number";
    inputNumeros.id = "qtdNumeros";    

    var labelMax = document.createElement("label");
    labelMax.textContent = "Valor Máximo";
    labelMax.id = "label";
    
    var inputValMax = document.createElement("input");
    inputValMax.type = "number";
    inputValMax.id = "valMax";  

    var labelMin = document.createElement("label");
    labelMin.textContent = "Valor Mínimo";
    labelMin.id = "label";
    
    var inputValMin = document.createElement("input");
    inputValMin.type = "number";
    inputValMin.id = "valMin";  


    var btnCalcular = document.createElement("button");
    btnCalcular.textContent = "Calcular";
    btnCalcular.id = "btn";
    btnCalcular.addEventListener("click", calcular, false);

    var labelFinal = document.createElement("label");
    labelFinal.id = "labelOrdenacao";

  
    pai.appendChild(titulo);
    pai.appendChild(qtdNumeros);
    pai.appendChild(inputNumeros);
    pai.appendChild(labelMax);
    pai.appendChild(inputValMax);
    pai.appendChild(labelMin);
    pai.appendChild(inputValMin);
    pai.appendChild(btnCalcular);
    pai.appendChild(labelFinal);    
};

function calcular(){
    var qtdNumeros = document.getElementById("qtdNumeros").value;
    let label = document.getElementById("labelOrdenacao");

    var tamanhoArray = parseInt(qtdNumeros);

    var arr = criarArray(tamanhoArray);

    var arrayOrdenado = ordenarArray(arr)
    
    label.textContent = arrayOrdenado;
}

function criarArray(tamanhoArray) {
    let valMax = document.getElementById("valMax").value;
    let max = parseInt(valMax);

    let valMin = document.getElementById("valMin").value;
    let min = parseInt(valMin);

    let array = []

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

    return array
}
    function ordenarArray(arr){
        console.log(arr)
        var novoArray = arr
        novoArray.sort(function(a, b){return a - b}); 

        return novoArray;
    }
    
    function geraRandom(max, min){
        number = Math.floor(Math.random() * (max - min + 1) + min);
        return number;
    }


    
