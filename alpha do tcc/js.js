document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Simulação de validação
    if (username === "usuario" && password === "senha") {
        document.getElementById("message").textContent = "Login bem-sucedido!";
        document.getElementById("message").style.color = "green";
    } else {
        document.getElementById("message").textContent = "Usuário ou senha incorretos.";
    }
    const animation = lottie.loadAnimation({
        container: document.getElementById('lottie'), // O contêiner onde a animação será renderizada
        renderer: 'svg', // Tipo de renderização
        loop: true, // Se deve repetir
        autoplay: true, // Iniciar automaticamente
        path: 'caminho/para/sua/animacao.json' // Caminho para o arquivo JSON da animação
    });
    
});
