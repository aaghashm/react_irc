// Function declaration
function addNumbers(a, b) {
    return a + b;
  }
  
// Function expression
const multiplyNumbers = function(a, b) {
return a * b;
};

// Arrow function
const subtractNumbers = (a, b) => a - b;

//for loop

for (let i = 0; i < 5; i++) {
    window.prompt(i);
}
 
//while loop
let j = 0;
while (j < 5) {
  console.log(j);
  j++;
}

//map
const numbers = [1, 2, 3, 4, 5];
const squaredNumbers = numbers.map(num => num * num);
console.log(squaredNumbers);  // Output: [1, 4, 9, 16, 25]

//DOM Manipulation

// Get the element by ID
const myDiv = document.getElementById('myDiv');

// Change text content
myDiv.textContent = 'Hello, GPT-3!';

// Add a new element
const newElement = document.createElement('p');
newElement.textContent = 'This is a new paragraph.';
myDiv.appendChild(newElement);

// Add a click event listener
myDiv.addEventListener('click', () => {
  alert('Div clicked!');
});

//modules
console.log(Math.sqrt(16));   // Output: 4
console.log(Math.PI);         // Output: 3.141592653589793
console.log(Math.random());   // Output: a random number between 0 (inclusive) and 1 (exclusive)
