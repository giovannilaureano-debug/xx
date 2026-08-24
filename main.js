// Seleciona todos os botões de curtir da página
const botoesCurtir = document.querySelectorAll('.like-btn');

botoesCurtir.forEach((botao) => {
    botao.addEventListener('click', () => {
        // Incrementa o contador de curtidas
        const contador = botao.querySelector('span');
        contador.textContent = Number(contador.textContent) + 1;

        // Adiciona a classe que ativa a animação
        botao.classList.add('animar');

        // Remove a classe após a animação finalizar para permitir novos cliques
        setTimeout(() => {
            botao.classList.remove('animar');
        }, 300);
    });
});