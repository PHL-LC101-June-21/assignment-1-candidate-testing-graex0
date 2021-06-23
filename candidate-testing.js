const input = require('readline-sync');

// TODO 2: modify your quiz app to ask 5 questions //

// TODO 1.1a: Define candidateName // 
let candidateName = "";
// TODO 1.2a: Define question, correctAnswer, and candidateAnswer //
let question = "Who was the first American woman in space? ";
let correctAnswer = "Sally Ride";
let candidateAnswer = "";
let questions = [
  "Who was the first American woman in space? ",
  "True or false: 5 kilometer == 5000 meters? ",
  "(5 + 3)/2 * 10 = ? ",
  "Given the array [8, 'Orbit', 'Trajectory', 45], what entry is at index 2? ",
  "What is the minimum crew size for the ISS? "
];
let correctAnswers = [
  "Sally Ride",
  "true",
  "40",
  "Trajectory",
  "3",
];
let candidateAnswers = [];
let correctAnswersNumber = 0;

function askForName() {
  // TODO 1.1b: Ask for candidate's name //
  candidateName = input.question("Please enter your name: ");
  console.log("Hello " + candidateName + "! \n");

}
                  
// }
  // TODO 1.2b: Ask candidate the question and assign the response as candidateAnswer //

// Below is the previousl answer to assignment 1, part 1.
// let candidateAnswer = input.question(question);

//   if (candidateAnswer === "") {
//   console.log("Please enter an answer for the first question. ")
//   if (candidateAnswer === correctAnswer){
//     console.log("You are correct! ")
//     }
//         else if (candidateAnswer !== correctAnswer){
//     console.log("You are not correct. ")
//     }
// }

function askQuestion() {

// Assigment 1, Part 2 updates:

for (let i = 0; i < questions.length; i++) {
  candidateAnswers[i] = input.question(questions[i]);
 };
}

function gradeQuiz(candidateAnswers) {
  // TODO 1.2c: Let the candidate know if they have answered the question correctly or incorrectly // 
for (let i = 0; i < correctAnswers.length; i++) {  
  if (candidateAnswers[i].toUpperCase() === correctAnswers[i].toUpperCase()) {
      correctAnswersNumber = correctAnswersNumber + 1;
    }
  }
console.log("\n"+ "Candidate Name: " + candidateName)
for (i = 0; i < candidateAnswers.length; i++) {
   console.log((i + 1) + ")" + questions[i] + "\nYour answer: " + candidateAnswers[i] + "\nCorrect answer: " + correctAnswers[i] + ". \n");
  }

let grade = (correctAnswersNumber/5 * 100);
console.log(">>> Overall Grade: " + grade + "% (" + correctAnswersNumber + " of 5 responses correct) <<<")
  if (grade < 80) {
    console.log(">>> Status: FAILED <<<");
  }
    else {console.log (">>> Status: PASSED <<<")
    }
  return grade;

// resolve below issue with candidateName as undefined. 
// console.log("Candidate Name: " + candidateName + "\n" );
 
}
 


// use formula for grade (Number of Correct Answers) / (Number of Quiz Questions) * 100

function runProgram() {
  askForName();
  // TODO 1.1c: Ask for candidate's name //
  
  askQuestion();
  gradeQuiz(this.candidateAnswers);
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
  candidateName: candidateName,
  question: question,
  correctAnswer: correctAnswer,
  candidateAnswer: candidateAnswer,
  questions: questions,
  correctAnswers: correctAnswers,
  candidateAnswers: candidateAnswers,
  gradeQuiz: gradeQuiz,
  runProgram: runProgram
}