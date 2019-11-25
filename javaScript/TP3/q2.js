questao2();

function questao2 () { 
    var pai = document.getElementById("q2");

    var titulo = document.createElement("h1");
    titulo.textContent = "Questão 2";
    titulo.id = "titulo";

    var labelFatorial = document.createElement("label");
    labelFatorial.textContent = "Calcular Fatorial De:";
    labelFatorial.id = "label";
    
    var inputFatorial = document.createElement("input");
    inputFatorial.type = "number";
    inputFatorial.id = "fatorial";    

    var btnCalcular = document.createElement("button");
    btnCalcular.textContent = "Calcular";
    btnCalcular.id = "btn";
    btnCalcular.addEventListener("click", calcular, false);

    var labelFinal = document.createElement("label");
    labelFinal.id = "labelFatorial";
  
    pai.appendChild(titulo);
    pai.appendChild(labelFatorial);
    pai.appendChild(inputFatorial);
    pai.appendChild(btnCalcular);
    pai.appendChild(labelFinal);
    
};

function calcular() {
    var antes = Date.now();
    var valFatorial = document.getElementById("fatorial").value;
    let num = parseInt(valFatorial);
    var labelFinal = document.getElementById("labelFatorial");

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
   
    labelFinal.textContent =num + "! = " + explicaFator + " = " + fatorial + " Tempo: " + tempo + "ms";
    
}

 
    
