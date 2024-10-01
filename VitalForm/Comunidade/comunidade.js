// Função para lidar com o envio do formulário
document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Evita o recarregamento da página

    // Coletar os dados inseridos
    const nome = document.getElementById('nome').value;
    const cpf = document.getElementById('cpf').value;
    const email = document.getElementById('email').value;

    // Salvar os dados no LocalStorage para simular um "login" persistente
    localStorage.setItem('usuarioLogado', JSON.stringify({ nome, cpf, email }));

    // Exibir uma mensagem de sucesso e esconder o formulário
    mostrarDadosUsuario();
});

function mostrarDadosUsuario() {
    // Verificar se o usuário já está "logado"
    const usuarioLogado = JSON.parse(localStorage.getItem('usuarioLogado'));

    if (usuarioLogado) {
        // Esconder o formulário de login e mudar o título
        document.getElementById('loginForm').style.display = 'none';
        document.getElementById('titulo').textContent = 'Usuário Logado';

        // Exibir a mensagem de usuário logado
        const resultadoDiv = document.getElementById('resultado');
        resultadoDiv.innerHTML = `<p><strong>Bem-vindo, ${usuarioLogado.nome}!</strong></p>
                                  <p>Você está logado com o CPF: ${usuarioLogado.cpf} e E-mail: ${usuarioLogado.email}</p>
                                  <button id="logoutBtn">Sair</button>`;

        // Adicionar funcionalidade de logout
        document.getElementById('logoutBtn').addEventListener('click', function() {
            localStorage.removeItem('usuarioLogado');  // Remove os dados do usuário logado
            window.location.reload();  // Recarregar a página para mostrar o formulário novamente
        });
    }
}

// Verificar se o usuário está logado ao carregar a página
window.onload = function() {
    mostrarDadosUsuario();  // Chama a função para verificar se há um usuário logado
};
