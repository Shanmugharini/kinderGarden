// Sample quiz data with image URLs
const quizData = [
  {
    questionImage: 'images1/lion.jpg',
    options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/domestic1.jpg',
    options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/wild2.jpg',
    options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/domestic2.jpg',
 options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/both.jpg',
    options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [1] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/domestic3.jpg',
    options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/wild4.jpg',
     options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/wild3.jpg',
  options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/domestic4.jpg',
     options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/wild5.jpg',
    options: ['Wild Animal', 'Both of them', 'Domestic Animal', 'None of these'],
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
