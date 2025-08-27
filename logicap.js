const questions = [
      {
        question: "Qual é o objetivo da lógica de programação?",
        options: [
          "Ensinar a decorar códigos",
          "Resolver problemas de forma estruturada",
          "Aprender apenas uma linguagem",
          "Fazer programas sem planejamento"
        ],
        correct: 1
      },
      {
        question: "O que são algoritmos?",
        options: [
          "Um conjunto de regras sem ordem",
          "Sequência de passos para resolver um problema",
          "Um tipo de linguagem de programação",
          "Um erro no código"
        ],
        correct: 1
      },
      {
        question: "O que significa 'variável' na lógica?",
        options: [
          "Um espaço para armazenar valores",
          "Um tipo de erro de código",
          "Uma operação matemática",
          "Um laço de repetição"
        ],
        correct: 0
      },
      {
        question: "Qual estrutura de decisão usamos em lógica?",
        options: [
          "while",
          "if/else",
          "for",
          "print"
        ],
        correct: 1
      },
      {
        question: "Qual estrutura é usada para repetição?",
        options: [
          "switch",
          "if",
          "loop (for/while)",
          "case"
        ],
        correct: 2
      }
    ];

    const questionElement = document.getElementById("question");
    const optionsElement = document.getElementById("options");
    const nextButton = document.getElementById("next-btn");
    const resultElement = document.getElementById("result");

    let currentQuestionIndex = 0;
    let score = 0;

    function showQuestion() {
      let currentQuestion = questions[currentQuestionIndex];
      questionElement.textContent = currentQuestion.question;
      optionsElement.innerHTML = "";

      currentQuestion.options.forEach((option, index) => {
        const button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => selectAnswer(index);
        optionsElement.appendChild(button);
      });
    }

    function selectAnswer(selectedIndex) {
      let correctIndex = questions[currentQuestionIndex].correct;
      const buttons = optionsElement.querySelectorAll("button");

      buttons.forEach((button, index) => {
        if (index === correctIndex) {
          button.classList.add("correct");
        } else if (index === selectedIndex) {
          button.classList.add("wrong");
        }
        button.disabled = true;
      });

      if (selectedIndex === correctIndex) {
        score++;
      }

      nextButton.style.display = "block";
    }

    nextButton.addEventListener("click", () => {
      currentQuestionIndex++;
      if (currentQuestionIndex < questions.length) {
        showQuestion();
        nextButton.style.display = "none";
      } else {
        showResult();
      }
    });

    function showResult() {
      questionElement.style.display = "none";
      optionsElement.style.display = "none";
      nextButton.style.display = "none";
      resultElement.style.display = "block";
      resultElement.textContent = `Você acertou ${score} de ${questions.length} questões!`;
    }

    showQuestion();