import { Card } from "./card-model.js";
import { CardPreparer } from "./prepare-model.js";
console.log("JS is running");
// Sound file paths (relative to project root or index.html)
const sounds = {
    flip: new Audio("items/audio/flip.mp3"),
    match: new Audio("items/audio/good.mp3"),
    fail: new Audio("items/audio/fail.mp3"),
    gameOver: new Audio("items/audio/game-over.mp3"),
    fullTrack: new Audio("items/audio/fulltrack.mp3"),
};
const gameBoard = document.getElementById("game-board");
const progressBar = document.getElementById("progress-bar");
const totalPairs = 10;
let matchedPairs = 0;
let flippedCards = [];
let cards = [];
const cardBackImage = "items/back.jpg";
function updateProgress() {
    const progressPercent = (matchedPairs / totalPairs) * 100;
    progressBar.style.width = progressPercent + "%";
    progressBar.textContent = `${Math.round(progressPercent)}%`;
}
function resetGame() {
    matchedPairs = 0;
    flippedCards = [];
    cards = [];
    gameBoard.innerHTML = "";
    const images = CardPreparer.prepareCards();
    images.forEach((img) => {
        const card = new Card(img, cardBackImage);
        card.element.addEventListener("click", () => {
            if (card.isFlipped || flippedCards.length === 2)
                return;
            card.flip();
            sounds.flip.play();
            flippedCards.push(card);
            if (flippedCards.length === 2) {
                if (flippedCards[0].image === flippedCards[1].image) {
                    // Match found
                    flippedCards.forEach((c) => c.markAsMatched());
                    matchedPairs++;
                    sounds.match.play();
                    updateProgress();
                    flippedCards = [];
                    if (matchedPairs === totalPairs) {
                        // Game completed
                        sounds.fullTrack.play();
                        alert("Congratulations! You matched all cards!");
                    }
                }
                else {
                    // No match
                    sounds.fail.play();
                    setTimeout(() => {
                        flippedCards.forEach((c) => c.flip());
                        flippedCards = [];
                    }, 1000);
                }
            }
        });
        gameBoard.appendChild(card.element);
        cards.push(card);
    });
    updateProgress();
}
// Start the game initially
resetGame();
