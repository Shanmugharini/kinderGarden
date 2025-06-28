quizData=[
 {
    questionImage: 'images1/smile.jpg',
    options: ['Happy', 'Scared', 'Proud', 'Angry'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },{
    questionImage: 'images1/shy.jpg',
    options: ['proud', 'Sad', 'Shy', 'Angry'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/sad.jpg',
    options: ['Shy', 'Sad', 'Angry', 'Happy'],
    correctOptions: [1] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/angry.jpg',
    options: ['Angry', 'Proud', 'Happy', 'Scared'],
    correctOptions: [0] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/scared.jpg',
    options: ['Surprised', 'Scared', 'Happy', 'Proud'],
    correctOptions: [1] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images/cry.jpg',
    options: ['Sad', 'Shy', 'Cry', 'None'],
    correctOptions: [2] // Indexes of the correct options (0-3)
  },
{
    questionImage: 'images1/surprised.jpg',
    options: ['Angry', 'Happy', 'Scared', 'Surprised'],
    correctOptions: [3] // Indexes of the correct options (0-3)
  },
  // Add more questions here
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