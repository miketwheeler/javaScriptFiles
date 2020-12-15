// 'use strict';
// // Simple Polling Applicaiton

// const poll = {
//   question: 'What is your favorite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++', '4: Java'],
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     // Get the answer as a number from the prompt
//     const answer = Number(
//       prompt(
//         `${this.question}\n
// 	  ${this.options.join('\n')}\n(Write option number)`
//       )
//     );

//     // Save the answer
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++;

//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     } else if (type === 'string') {
//       console.log(`Poll results are ${this.answers.join(', ')}`);
//     }
//   },
// };

// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// ////// BONUS
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');
// poll.displayResults.call({ answers: [1, 5, 3, 9, 6, 1] }, 'string');
