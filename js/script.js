let allQuestions = [];
let selectedQuestions = [];
let currentIndex = 0;
let score = 0;

const startScreen = document.getElementById('start-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultScreen = document.getElementById('result-screen');

const startBtn = document.getElementById('start-btn');
const nextBtn = document.getElementById('next-btn');
const restartBtn = document.getElementById('restart-btn');

const questionNumEl = document.getElementById('question-num');
const topicEl = document.getElementById('topic');
const questionTextEl = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const feedbackEl = document.getElementById('feedback');

// Carregamento direto da variável global definida em js/questoes.js
if (typeof quizData !== 'undefined' && quizData.length > 0) {
    allQuestions = quizData;
    startBtn.disabled = false;
    startBtn.textContent = "Iniciar Quiz (20 Questões)";
} else {
    startBtn.textContent = "Erro ao carregar perguntas";
    console.error("A variável quizData não foi encontrada ou está vazia.");
}

startBtn.addEventListener('click', startQuiz);
nextBtn.addEventListener('click', nextQuestion);
restartBtn.addEventListener('click', startQuiz);

function startQuiz() {
    // Sorteia 20 questões aleatórias do total
    const shuffled = [...allQuestions].sort(() => 0.5 - Math.random());
    selectedQuestions = shuffled.slice(0, 20);
    
    currentIndex = 0;
    score = 0;
    
    startScreen.classList.remove('active');
    resultScreen.classList.remove('active');
    quizScreen.classList.add('active');
    
    showQuestion();
}

function showQuestion() {
    resetState();
    const q = selectedQuestions[currentIndex];
    
    questionNumEl.textContent = `Questão ${currentIndex + 1}/20`;
    topicEl.textContent = q.topico || "Inglês 6º Ano";
    questionTextEl.textContent = q.pergunta;

    q.opcoes.forEach((opcao, index) => {
        const button = document.createElement('button');
        button.classList.add('option-btn', `opt-${index}`);
        button.textContent = `${String.fromCharCode(65 + index)}) ${opcao}`;
        button.addEventListener('click', () => selectOption(button, index, q.correta));
        optionsContainer.appendChild(button);
    });
}

function resetState() {
    nextBtn.style.display = 'none';
    feedbackEl.textContent = '';
    optionsContainer.innerHTML = '';
}

function selectOption(selectedBtn, chosenIndex, correctIndex) {
    const buttons = optionsContainer.querySelectorAll('.option-btn');
    buttons.forEach(btn => btn.disabled = true);

    if (chosenIndex === correctIndex) {
        selectedBtn.classList.add('correct');
        feedbackEl.textContent = "✨ Resposta Correta!";
        feedbackEl.style.color = "#26890c";
        score++;
    } else {
        selectedBtn.classList.add('wrong');
        buttons[correctIndex].classList.add('correct');
        feedbackEl.textContent = "❌ Resposta Incorreta!";
        feedbackEl.style.color = "#e21b3c";
    }

    if (currentIndex < selectedQuestions.length - 1) {
        nextBtn.style.display = 'inline-block';
    } else {
        nextBtn.textContent = "Ver Resultado Final";
        nextBtn.style.display = 'inline-block';
    }
}

function nextQuestion() {
    currentIndex++;
    if (currentIndex < selectedQuestions.length) {
        nextBtn.textContent = "Próxima Pergunta";
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    quizScreen.classList.remove('active');
    resultScreen.classList.add('active');
    
    const percentage = Math.round((score / 20) * 100);
    document.getElementById('final-score').textContent = `${score} de 20 acertos (${percentage}%)`;
    
    const msgEl = document.getElementById('result-message');
    if (percentage >= 80) {
        msgEl.textContent = "🏆 Excelente trabalho! Você domina a matéria!";
    } else if (percentage >= 50) {
        msgEl.textContent = "👍 Muito bem! Continue praticando.";
    } else {
        msgEl.textContent = "📚 Vale a pena revisar o conteúdo das aulas.";
    }
}