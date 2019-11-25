var alunosAprovados = 0
var alunosReprovados= 0

questao3();

function questao3() { 

    var pai = document.getElementById("q3");
    var titulo = document.createElement("h1");
    titulo.textContent = "Questão 3";
    titulo.id = "titulo";
    
    var btnRelatorio = document.createElement("button");
    btnRelatorio.textContent = "Gerar Relatório";
    btnRelatorio.id = "btn";
    btnRelatorio.addEventListener("click", gerarRelatorio, false);

    var labelFinal = document.getElementById("labelFinal");


    pai.appendChild(titulo);
    pai.appendChild(btnRelatorio);
}

function gerarRelatorio(){
    var pai = document.getElementById("q3");      

    var tabela = document.createElement("table");
    tabela.id = "tabela";
    tabela.setAttribute('border','2px');

    var colId = document.createElement('td');
    colId.id = "idAluno";
    colId.textContent = "ID Aluno";

    var colNota = document.createElement('td');
    colNota.textContent = "Nota Aluno";
    colNota.id = "notaAluno";

    var colStatus = document.createElement('td');
    colStatus.textContent = "Status Aluno";
    colStatus.id = "statusAluno";
    
    tabela.appendChild(colId);
    tabela.appendChild(colNota);
    tabela.appendChild(colStatus);

    var alunos = [];
    alunos = gerarAlunos();
    
    alunos.forEach(function(aluno){        

        let linhaId = tabela.insertRow();
        let linhaNota = tabela.insertRow();
        let linhaStatus = tabela.insertRow();
        
        var x = linhaId.insertCell();
        x.innerHTML = aluno.matricula;
        
        var y = linhaNota.insertCell();
        y.innerHTML = aluno.nota;

        var z = linhaStatus.insertCell();
        z.innerHTML = aluno.status;

        colNota.appendChild(linhaNota);
        colId.appendChild(linhaId);
        colStatus.appendChild(linhaStatus);
    })

    pai.appendChild(tabela);

    labelFinal.textContent = "APROVADOS: " + alunosAprovados*100/20 + "%" + " REPROVADOS: " + alunosReprovados*100/20 + "% \n";
    
    pai.appendChild(labelFinal);
    
}

function gerarAlunos(){
    var novosAlunos = [];
    alunosAprovados = []
    alunosReprovados = []

    class Aluno {
        constructor(matricula, nota, status) {
          this.matricula = matricula;
          this.nota = nota;
          this.status = status;
        }
      }

    var x = 1;

    while(x < 21){
        let nota = getRandom(100)
        let status = undefined

        if(nota < 50){
            status = "REPROVADO"
            alunosReprovados++
        }else {
            status = "APROVADO"
            alunosAprovados++
        }

        let aluno = new Aluno(x, nota, status)
        novosAlunos.push(aluno)
        x++
    }

    return novosAlunos;
}

function getRandom(max) {
    return Math.floor(Math.random() * max + 1)
}
