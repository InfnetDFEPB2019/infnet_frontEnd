questao6();

function questao6 () { 
    var pai = document.getElementById("q6");


    var titulo = document.createElement("h1");
    titulo.textContent = "Questão 6";
    titulo.id = "titulo";

    var login = document.createElement("h3");
    login.textContent = "Efetue seu Login";
    login.id = "login";

    var labelEmail = document.createElement("label");
    labelEmail.textContent = "Insira seu Email";
    labelEmail.id = "labelEmail";

    var labelSenha = document.createElement("label");
    labelSenha.textContent = "Insira sua senha";
    labelSenha.id = "labelSenha";

    var inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.id = "email";

    var inputSenha = document.createElement("input");
    inputSenha.type = "password";   
    inputSenha.id = "senha";

    var btnCadastro = document.createElement("button");
    btnCadastro.textContent = "Criar Cadasto";
    btnCadastro.id = "btnCadastro";
    btnCadastro.addEventListener("click", criarCadastro, false);

    var btnLogin = document.createElement("button");
    btnLogin.textContent = "Efetuar LogIn";
    btnLogin.id = "btnLogin";
    btnLogin.addEventListener("click", efetuarLogin, false);

    var btnLogout = document.createElement("button");
    btnLogout.textContent = "Efetuar LogOut";
    btnLogout.id = "btnLogout";
    btnLogout.style.visibility = 'hidden';
    btnLogout.addEventListener("click", efetuarLogout, false);

    pai.appendChild(titulo);
    pai.appendChild(login);

    pai.appendChild(labelEmail);
    pai.appendChild(inputEmail);

    pai.appendChild(labelSenha);
    pai.appendChild(inputSenha);

    pai.appendChild(btnLogout);
    pai.appendChild(btnCadastro);
    pai.appendChild(btnLogin);

    
    

    if (senhaStorage = localStorage.getItem("usuarioLogado")){
        esconderComponentes()
    }
    


    function criarCadastro(){
        let email = document.getElementById("email");
        let senha = document.getElementById("senha");
        
        if(email.value == "" || senha.value == ""){
            alert("Favor Digitar Email e Senha!")
        }else {
            localStorage.setItem(email.value, senha.value)
            alert("Usuario Cadastrado com Sucesso!")
            senha.value = ""
            email.value = ""            
        }
    }

    function efetuarLogin(){
        let email = document.getElementById("email");
        let senha = document.getElementById("senha");

        senhaStorage = localStorage.getItem(email.value)

        if (senha != null && senhaStorage == senha.value){
            esconderComponentes()
            localStorage.setItem("usuarioLogado", true)           
        }else {
            alert("Usuario ou Senha Incorretos!")
        }
    }

    function efetuarLogout(){
        mostrarComponentes()
    }


    function esconderComponentes(){
        let labelEmail = document.getElementById("labelEmail");
        labelEmail.style.visibility = 'hidden';
        
        let email = document.getElementById("email");
        email.style.visibility = 'hidden';
        
        let labelSenha = document.getElementById("labelSenha");
        labelSenha.style.visibility = 'hidden';
        
        let senha = document.getElementById("senha");
        senha.style.visibility = 'hidden';

        let btnCadastro = document.getElementById("btnCadastro");
        btnCadastro.style.visibility = 'hidden';
        
        let btnLogin = document.getElementById("btnLogin");
        btnLogin.style.visibility = 'hidden';
        
        let btnLogout = document.getElementById("btnLogout");
        btnLogout.style.visibility = 'visible';
        
        let labelh3 = document.getElementById("login");
        labelh3.textContent = "Usuario Logado"
    }
    
    function mostrarComponentes(){
        let labelEmail = document.getElementById("labelEmail");
        labelEmail.style.visibility = 'visible';
        
        let email = document.getElementById("email");
        email.style.visibility = 'visible';
        
        let labelSenha = document.getElementById("labelSenha");
        labelSenha.style.visibility = 'visible';
        
        let senha = document.getElementById("senha");
        senha.style.visibility = 'visible';

        let btnCadastro = document.getElementById("btnCadastro");
        btnCadastro.style.visibility = 'visible';
        
        let btnLogin = document.getElementById("btnLogin");
        btnLogin.style.visibility = 'visible';
        
        let btnLogout = document.getElementById("btnLogout");
        btnLogout.style.visibility = 'hidden';
        
        let labelh3 = document.getElementById("login");
        labelh3.textContent = "Efetue seu Login"

        senha.value = ""
        email.value = ""
        
        localStorage.removeItem("usuarioLogado")
    }
};