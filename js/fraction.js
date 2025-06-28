// Sample quiz data with image URLs
const quizData = [
  {
    questionImage: 'images/fra10.jpg',
    options: ['1/3', '1/2', '1', '1/4'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra1.jpg',
    options: ['3/1', '2/3', '1/3', '1/2'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra3.jpg',
    options: ['1/8', '1/6', '5/8', '6/8'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra2.jpg',
    options: ['1', '1/2', '1/4', '1/3'],
    correctOptions: [1] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra8.jpg',
    options: ['3/4', '2/4', '1/4', '1/8'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra6.jpg',
    options: ['4/6', '5/6', '1/8', '1/6'],
    correctOptions: [3] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra7.jpg',
    options: ['1/4', '3/4', '1/3', '2/3'],
    correctOptions: [1] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra4.jpg',
    options: ['1/2', '3/4', '1/4', '1/8'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra9.jpg',
    options: ['3/8', '1/3', '3/5', '1/6'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/fra5.jpg',
    options: ['1/8', '2/3', '1/2', '5/6'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
  // Add more questions here (up to 10)
];

let currentQuestion = 0;
const totalQuestions = quizData.length;
let score = 0;

function loadQuestion() {
  const questionImage = document.getElementById('question-image');
  questionImage.src = quizData[currentQuestion].questionImage;

  const optionLabels = document.querySelectorAll('.option-text');
  for (let i = 0; i < optionLabels.length; i++) {
    optionLabels[i].textContent = quizData[currentQuestion].options[i];
  }
}

function checkAnswer() {
  const selectedOptions = document.querySelectorAll('input[name="option"]:checked');
  let selectedOptionIndexes = [];
  selectedOptions.forEach(option => {
    selectedOptionIndexes.push(parseInt(option.value));
  });

  const correctOptions = quizData[currentQuestion].correctOptions;
  const isCorrect = selectedOptionIndexes.length === correctOptions.length &&
    selectedOptionIndexes.every(index => correctOptions.includes(index));

  if (isCorrect) {
    score++;
  }

  currentQuestion++;
  if (currentQuestion < totalQuestions) {
    loadQuestion();
    clearOptions();
  } else {
    showResult();
  }
}

function clearOptions() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  checkboxes.forEach(checkbox => {
    checkbox.checked = false;
  });
}

function showResult() {
  const quizContainer = document.querySelector('.quiz-container');
  quizContainer.innerHTML = `<h2>Quiz completed!</h2>
                              <p>Your score: ${score} out of ${totalQuestions}</p>`;
}

// Start the quiz when the page loads
window.addEventListener('load', () => {
  loadQuestion();
});
