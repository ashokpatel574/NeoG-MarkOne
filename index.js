const readlineSync = require('readline-sync');

let userName = readlineSync.question(`May I have your name? `);

while (userName.length === 0) {
  userName = readlineSync.question(`May I have your name? `);
}
console.log(`Hi, ${userName}! \n`)

console.log(`Lets play online Quiz! \n`)

let score = 0;

function quizPlay(question, answer) {

  let userAnswer = readlineSync.question(`${question} `);

  if (userAnswer.length === 0) {
    userAnswer = readlineSync.question(`${question} `)
  }

  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    console.log(`${userAnswer} is correct Answer \n`)
    score++;
  } else {
    console.log(`${userAnswer} is an incorrect Answer! \n`);
    console.log(`Correct Answer is ${answer}\n`);

  }
  console.log(`Score: ${score}\n`)
}

// Array of Objects
const quizData = [
  {
    question: `What is the capital of Maharashtra?`,
    answer: "Mumbai"
  },
  {
    question: `What is the capital of Arunachal Pradesh ?`,
    answer: "Itanagar"
  },
  {
    question: `What is the capital of Uttarakhand ?`,
    answer: "Dehradun"
  },
  {
    question: `Dispur is the capital city of which north-eastern state ?`,
    answer: "Assam"
  },
  {
    question: `Which city is known as the “summer capital” of Jammu and Kashmir ?`,
    answer: "Srinagar"
  },
  {
    question: `Gangtok is the capital of which state ?`,
    answer: "Sikkim"
  },
  {
    question: `What is the capital of Himachal Pradesh ?`,
    answer: "Shimla"
  },
  {
    question: `Gandhinagar is the capital of which state ?`,
    answer: "Gujarat"
  },
]

for (let i = 0; i < quizData.length; i++) {
  quizPlay(quizData[i].question, quizData[i].answer)
}



