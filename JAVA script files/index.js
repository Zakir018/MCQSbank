const questions = [
    {
      question: "What is the capital of France?",
      options: ["Paris", "London", "Berlin", "Madrid"],
      answer: "A"
    },
    {
      question: "Which planet is known as the Red Planet?",
      options: ["Earth", "Mars", "Venus", "Jupiter"],
      answer: "B"
    },
   
  {
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      answer: "B"
    }
  ];
  
  shuffleArray(questions);
  
  let currentQuestionIndex = 0;
  let correctCount = 0;
  let incorrectCount = 0;
  
  const questionElement = document.getElementById('question');
  const answerForm = document.getElementById('answer-form');
  const nextButton = document.getElementById('next-button');
  const showResultButton = document.getElementById('show-result-button');
  const resultContainer = document.getElementById('result-container');
  const correctCountElement = document.getElementById('correct-count');
  const incorrectCountElement = document.getElementById('incorrect-count');
  
  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }
  
  function showQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;
    const optionsHTML = currentQuestion.options.map((option, index) => `
      <label><input type="radio" name="answer" value="${String.fromCharCode(65 + index)}">${option}</label>
    `).join('');
    answerForm.innerHTML = optionsHTML;
  }
  
  function checkAnswer() {
    const selectedAnswer = answerForm.querySelector('input[name="answer"]:checked');
    if (!selectedAnswer) return;
  
    const selectedValue = selectedAnswer.value;
    if (selectedValue === questions[currentQuestionIndex].answer) {
      correctCount++;
    } else {
      incorrectCount++;
    }
  
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
      showQuestion();
    } else {
      showResultButton.style.display = 'block';
      nextButton.style.display = 'none';
    }
  }
  
  function showResult() {
    resultContainer.style.display = 'block';
    correctCountElement.textContent = `Correct: ${correctCount}`;
    incorrectCountElement.textContent = `Incorrect: ${incorrectCount}`;
    questionElement.style.display = 'none';
    answerForm.style.display = 'none';
    showResultButton.style.display = 'none';
  }
  
  nextButton.addEventListener('click', checkAnswer);
  showResultButton.addEventListener('click', showResult);
  
  showQuestion();