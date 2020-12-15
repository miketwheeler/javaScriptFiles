// (function () {
//   const header = document.querySelector('h1');
//   header.style.color = 'red';

//   document.querySelector('body').addEventListener('click', () => {
//     header.style.color = 'blue';
//   });
// })();

// This works because......//
// the closure is useful bc by the time the invoked function is executed
// it's gone, it is within the scope of the document, and the scope vars
// is remembered with the closure after it is executed.
