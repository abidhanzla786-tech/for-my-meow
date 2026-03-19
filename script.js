const yesButton = document.getElementById('yesButton');
const noButton = document.getElementById('noButton');

function moveButton() {
    // Calculate random position within the screen boundaries
    // We use 80% of width/height to keep it from going off-screen
    const x = Math.random() * (window.innerWidth - noButton.offsetWidth);
    const y = Math.random() * (window.innerHeight - noButton.offsetHeight);

    noButton.style.position = "absolute";
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Make the "Yes" button grow
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = (currentSize * 1.2) + "px";
}

// This handles the mobile touch specifically
noButton.addEventListener('touchstart', function(e) {
    e.preventDefault(); // Prevents the actual "click" from happening
    moveButton();
});

function handleYesClick() {
    document.querySelector('.container').innerHTML = `
        <h1 class="header_text">Yay! See you soon, Princess! 💖</h1>
        <img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbmZ0eXNnd3B6Z3R3ZGRvOTB3YjZuemswd3d3eXp3OTd3ZGRvOTB3YiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/MDJ9IbxxvDUQM/giphy.gif">
    `;
}