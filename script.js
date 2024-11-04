//your JS code here. If required.
const container = document.getElementById('container');
const numBoxes = 800;

// Function to generate random colors
function getRandomColor() {
    const hexColors = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += hexColors[Math.floor(Math.random() * 16)];
    }
    return color;
}

// Create 800 boxes dynamically
for (let i = 0; i < numBoxes; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    
    // Add hover event listener for color change
    square.addEventListener('mouseover', () => {
        const randomColor = getRandomColor();
        square.style.backgroundColor = randomColor;
    });
    
    // Remove the color after 1 second smoothly
    square.addEventListener('mouseout', () => {
        setTimeout(() => {
            square.style.backgroundColor = '#e0e0e0'; // Revert back to default
        }, 1000); // Delay for 1 second
    });

    container.appendChild(square);
}
