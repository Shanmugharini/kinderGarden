// Sample quiz data with image URLs
const quizData = [
  {
    questionImage: 'images1/red.jpg',
    options: ['Blue', 'Brown', 'Red', 'Black'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/pink.jpg',
    options: ['Blue', 'Green', 'Pink', 'Orange'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/orange.jpg',
    options: ['Orange', 'Grey', 'Yellow', 'Pink'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/yellow.jpg',
    options: ['Pink', 'Yellow', 'Blue', 'Purple'],
    correctOptions: [1] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/black.jpg',
    options: ['Green', 'Brown', 'Black', 'White'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/brown.jpg',
    options: ['Pink', 'Yellow', 'Red', 'Brown'],
    correctOptions: [3] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/purple.jpg',
    options: ['Purple', 'Green', 'Yellow', 'Orange'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/green.jpg',
    options: ['Blue', 'Purple', 'Green', 'Brown'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/blue.jpg',
    options: ['Blue', 'Yellow', 'Orange', 'Brown'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/white.jpg',
    options: ['White', 'Grey', 'Purple', 'Pink'],
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
