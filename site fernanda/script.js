// IMPORTANTE: Coloque a data e hora EXATAS do início do namoro aqui!
// Formato: Ano, Mês (0 = Janeiro, 1 = Fevereiro, ..., 11 = Dezembro), Dia, Hora, Minuto, Segundo
const dataInicioNamoro = new Date(2025, 2, 8, 17, 51, 0); // Exemplo: 15 de Janeiro de 2023, às 18:30:00

function atualizarContador() {
    const agora = new Date();
    const diferenca = agora - dataInicioNamoro; // Diferença em milissegundos

    // Calcula dias, horas, minutos, segundos
    let segundosTotal = Math.floor(diferenca / 1000);
    let minutosTotal = Math.floor(segundosTotal / 60);
    let horasTotal = Math.floor(minutosTotal / 60);
    let dias = Math.floor(horasTotal / 24);

    let segundos = segundosTotal % 60;
    let minutos = minutosTotal % 60;
    let horas = horasTotal % 24;

    // Formata para ter sempre dois dígitos (ex: 05 em vez de 5)
    document.getElementById('dias').textContent = String(dias).padStart(2, '0');
    document.getElementById('horas').textContent = String(horas).padStart(2, '0');
    document.getElementById('minutos').textContent = String(minutos).padStart(2, '0');
    document.getElementById('segundos').textContent = String(segundos).padStart(2, '0');
}

// Atualiza o contador a cada segundo
setInterval(atualizarContador, 1000);

// Chama a função uma vez ao carregar a página para não esperar 1 segundo
atualizarContador();
window.addEventListener('DOMContentLoaded', () => {
    const musica = document.getElementById('musicaFundo');
    const playPauseBtn = document.getElementById('playPauseBtn');

    if (musica && playPauseBtn) { // Verifica se os elementos existem na página
        let isPlaying = false;
        musica.volume = 0.5; // Ajuste o volume inicial (0.0 a 1.0), opcional

        playPauseBtn.addEventListener('click', () => {
            if (isPlaying) {
                musica.pause();
                playPauseBtn.textContent = 'Tocar nossa música ❤️';
            } else {
                musica.play().catch(error => {
                    // Isso pode acontecer se o navegador ainda tiver restrições
                    console.error("Erro ao tentar tocar a música:", error);
                    alert("Não foi possível iniciar a música. Talvez precise clicar novamente ou verificar as permissões do navegador.");
                });
                playPauseBtn.textContent = 'Pausar música ⏸️';
            }
            isPlaying = !isPlaying;
        });
    } else {
        if (!musica) console.error("Elemento de áudio #musicaFundo não encontrado.");
        if (!playPauseBtn) console.error("Botão #playPauseBtn não encontrado.");
    }
    function criarCoracaoParaChuva() {
    const coracao = document.createElement('div');
    coracao.classList.add('coracao-chuva');

    // Posição horizontal aleatória
    coracao.style.left = Math.random() * 98 + 'vw'; // Entre 0% e 98% da largura da tela

    // Duração da animação aleatória para velocidades diferentes
    const duracaoAleatoria = Math.random() * 3 + 4; // Duração entre 4s e 7s
    coracao.style.animationDuration = duracaoAleatoria + 's';

    // Tamanho do coração aleatório
    const tamanhoAleatorio = Math.random() * 15 + 15; // Tamanho entre 15px e 30px
    coracao.style.fontSize = tamanhoAleatorio + 'px';

    // Variação de emojis de coração (eles terão suas cores padrão)
    const emojisCoracao = ['❤️', '💖', '💕', '💜', '💛']; // Adicione ou remova emojis
    coracao.innerText = emojisCoracao[Math.floor(Math.random() * emojisCoracao.length)];
    
    // Adiciona o coração ao corpo da página
    document.body.appendChild(coracao);

    // Remove o coração do DOM depois que a animação terminar
    // para não sobrecarregar a página
    coracao.addEventListener('animationend', () => {
        coracao.remove();
    });
}

// Começa a "chover" corações em intervalos regulares
// Cuidado: um intervalo muito pequeno pode afetar o desempenho em computadores mais lentos.
// 300ms = cria um coração a cada 0.3 segundos.
setInterval(criarCoracaoParaChuva, 300);
}
);