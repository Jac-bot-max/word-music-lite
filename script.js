// Splash Screen
window.onload = () => {
    setTimeout(() => {
        const splash = document.getElementById("splash");
        if (splash) splash.style.display = "none";
    }, 4500);
};

// Botão Entrar
const botao = document.querySelector("button");

if (botao) {
    botao.addEventListener("click", () => {
        alert("Bem-vindo ao Word Music Lite! 🚀");
        // Depois vamos trocar isso para abrir o Feed.
        // Exemplo:
        // window.location.href = "feed.html";
    });
}