// Ask the user to enter a number
let number = prompt("Enter a number:");

// Convert the input to a number type
number = parseInt(number);

// Check if the input is a valid number
if (isNaN(number)) {
  alert("Please enter a valid number.");
} else {
  // Check even or odd
  if (number % 2 === 0) {
    alert(number + " is even.");
  } else {
    alert(number + " is odd.");
  }
}
