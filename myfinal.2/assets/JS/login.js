document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username.trim() !== '') {
        localStorage.setItem('username', username); // Armazena o nome de usuário no localStorage
        window.location.href = "cardapio.html";
    }
});
