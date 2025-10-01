export class CardPreparer {
    static prepareCards() {
        // Create pairs (duplicate images)
        const pairs = [...this.images, ...this.images];
        // Shuffle cards randomly
        return pairs.sort(() => Math.random() - 0.5);
    }
}
// Paths to images (relative to project root or index.html)
CardPreparer.images = [
    "items/images/0.jpg",
    "items/images/1.jpg",
    "items/images/2.jpg",
    "items/images/3.jpg",
    "items/images/4.jpg",
    "items/images/5.jpg",
    "items/images/6.jpg",
    "items/images/7.jpg",
    "items/images/8.jpg",
    "items/images/9.jpg"
];
