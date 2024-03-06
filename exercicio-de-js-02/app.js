// Defina a pontuação do jogador
let pontuacao = parseInt(prompt("Digite sua pontuação:"));

// Verifique se a pontuação é maior ou igual a 100
if (pontuacao >= 100) {
    // Se a pontuação for maior ou igual a 100, exiba "Parabéns, você venceu!"
    alert("Parabéns, você venceu!");
} else {
    // Caso contrário, exiba "Tente novamente para ganhar."
    alert("Tente novamente para ganhar.");
}
