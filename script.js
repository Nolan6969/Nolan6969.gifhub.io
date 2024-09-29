const perguntas = [
    {
        pergunta: "Qual máquina simples você usaria para levantar uma carga pesada sem muita força?",
        opcoes: ["Plano Inclinado", "Polia", "Roda e Eixo", "Alavanca"],
        respostaCerta: "Polia",
        explicacao: "A polia é uma máquina simples que permite levantar cargas pesadas com menos esforço, mudando a direção da força aplicada."
    },
    {
        pergunta: "Qual máquina simples facilita cortar materiais?",
        opcoes: ["Roda e Eixo", "Parafuso", "Alavanca", "Plano Inclinado"],
        respostaCerta: "Plano Inclinado",
        explicacao: "O plano inclinado é uma superfície inclinada que permite mover ou cortar objetos com menos força ao longo da inclinação."
    },
    {
        pergunta: "Qual máquina simples transforma movimento circular em movimento linear?",
        opcoes: ["Parafuso", "Polia", "Plano Inclinado", "Alavanca"],
        respostaCerta: "Parafuso",
        explicacao: "O parafuso é uma máquina simples que transforma movimento rotacional em movimento linear, facilitando o uso da força para unir ou levantar objetos."
    },
    {
        pergunta: "Qual máquina simples usa uma barra rígida para mover um objeto em torno de um ponto fixo?",
        opcoes: ["Polia", "Plano Inclinado", "Alavanca", "Roda e Eixo"],
        respostaCerta: "Alavanca",
        explicacao: "A alavanca usa uma barra rígida que gira em torno de um ponto fixo, conhecido como fulcro, para mover uma carga com menos esforço."
    }
];

let perguntaAtual = 0;

const perguntaEl = document.getElementById('pergunta');
const opcoesEl = document.querySelectorAll('.opcao');
const resultadoEl = document.getElementById('resultado');
const explicacaoEl = document.getElementById('explicacao');
const proximaBtn = document.getElementById('proxima');

// Função para exibir a pergunta
function exibirPergunta() {
    const perguntaObj = perguntas[perguntaAtual];
    perguntaEl.textContent = perguntaObj.pergunta;

    opcoesEl.forEach((botao, index) => {
        botao.textContent = perguntaObj.opcoes[index];
        botao.dataset.resposta = perguntaObj.opcoes[index] === perguntaObj.respostaCerta ? 'certo' : 'errado';
    });

    resultadoEl.textContent = ''; // Limpa o resultado anterior
    explicacaoEl.textContent = ''; // Limpa a explicação anterior
}

// Função para verificar a resposta e exibir a explicação
opcoesEl.forEach((botao) => {
    botao.addEventListener('click', () => {
        const resposta = botao.dataset.resposta;
        const perguntaObj = perguntas[perguntaAtual];

        if (resposta === 'certo') {
            resultadoEl.textContent = 'Correto!';
            resultadoEl.style.color = 'green';
        } else {
            resultadoEl.textContent = 'Errado! Tente novamente.';
            resultadoEl.style.color = 'red';
        }

        // Exibir a explicação
        explicacaoEl.textContent = perguntaObj.explicacao;
    });
});

// Função para ir para a próxima pergunta
proximaBtn.addEventListener('click', () => {
    perguntaAtual++;
    if (perguntaAtual < perguntas.length) {
        exibirPergunta();
    } else {
        perguntaEl.textContent = "Fim do quiz!";
        resultadoEl.textContent = '';
        explicacaoEl.textContent = '';
        opcoesEl.forEach(botao => botao.style.display = 'none');
        proximaBtn.style.display = 'none';
    }
});

// Inicializa o quiz com a primeira pergunta
exibirPergunta();