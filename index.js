// index.js

const tutorials = [
  "what does the this keyword mean?",
  "What is the Constructor OO pattern?",
  "implementing Blockchain Web API",
  "The Test Driven Development Workflow",
  "What is NaN and how Can we Check for it",
  "What is the difference between stopPropagation and preventDefault?",
  "Immutable State and Pure Functions",
  "what is the difference between == and ===?",
  "what is the difference between event capturing and bubbling?",
  "what is JSONP?",
];

function titleCased() {
  return tutorials.map(tutorial => {
    return tutorial.split(' ').map(word => {
      return word.charAt(0).toUpperCase() + word.slice(1);
    }).join(' ');
  });
}

console.log(titleCased());

// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// // Function to title case tutorial names in an array
// function titleCased(tutorials) {
//   // Check if tutorials is defined and is an array
//   if (Array.isArray(tutorials)) {
//       return tutorials.map(tutorial => {
//           return toTitleCase(tutorial);
//       });
//   } else {
//       // Handle case when tutorials is undefined or not an array
//       return [];
//   }
// }

// module.exports = titleCased; // Exporting the titleCased function

// function titleCased(tutorials) {
//   return tutorials.map(tutorial => {
//     return tutorial.split(' ').map(word => {
//       return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
//     }).join(' ');
//   });
// }

// Other code in your index.js file, if any

// index.js

// // Function to convert a string to title case
// function toTitleCase(str) {
//   return str.replace(/\w\S*/g, function(txt) {
//       return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
//   });
// }

// // Function to title case tutorial names in an array
// function titleCased(tutorials) {
//   return tutorials.map(tutorial => {
//       return toTitleCase(tutorial);
//   });
// }

// module.exports = titleCased; // Exporting the titleCased function

// index.js

// Function to convert a string to title case


