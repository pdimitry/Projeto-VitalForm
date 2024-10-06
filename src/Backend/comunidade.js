
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  

    
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;

    
    localStorage.setItem('usuarioLogado', JSON.stringify({ nome, cpf, email }));

    
    mostrarDadosUsuario();
});

function mostrarDadosUsuario() {
    
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
       
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('titulo').textContent = 'Usuário Logado';

        
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<p><strong>Bem-vindo, ${usuarioLogado.nome}!</strong></p>
                                  <p>Você está logado com o CPF: ${usuarioLogado.cpf} e E-mail: ${usuarioLogado.email}</p>
                                  <button id="logoutBtn">Sair</button>`;

       
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('usuarioLogado');  
            window.location.reload();  
        });
    }
}


window.onload = function() {
    mostrarDadosUsuario(); 
};
