// Initialize the counter
let count = 0;

// Get DOM elements
const countElement = document.getElementById('count');
const incrementButton = document.getElementById('increment');
const decrementButton = document.getElementById('decrement');
const resetButton = document.getElementById('reset');
const customInput = document.getElementById('customInput');
const setValueButton = document.getElementById('setValue');

// Increment Button
incrementButton.addEventListener('click', () => {
    count++;
    updateCount();
});

// Decrement Button
decrementButton.addEventListener('click', () => {
    count--;
    updateCount();
});

// Reset Button
resetButton.addEventListener('click', () => {
    count = 0;
    updateCount();
});

// Set Custom Value
setValueButton.addEventListener('click', () => {
    const customValue = parseInt(customInput.value);
    if (!isNaN(customValue)) {
        count = customValue;
        updateCount();
    } else {
        alert("Please enter a valid number!");
    }
});

// Function to update the counter display
function updateCount() {
    countElement.textContent = count;
    // Change color based on count
    if (count > 0) {
        countElement.style.color = '#28a745'; // Green for positive
    } else if (count < 0) {
        countElement.style.color = '#dc3545'; // Red for negative
    } else {
        countElement.style.color = '#333'; // Default for zero
    }
}