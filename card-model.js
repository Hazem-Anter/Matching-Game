export class Card {
    constructor(image, cardBackImage) {
        this.isFlipped = false;
        this.isMatched = false;
        this.image = image;
        this.element = this.createCardElement(cardBackImage);
    }
    createCardElement(cardBackImage) {
        const card = document.createElement("div");
        card.classList.add("card");
        card.innerHTML = `
      <div class="card-inner">
        <div class="card-front" style="background-image: url('${cardBackImage}')"></div>
        <div class="card-back" style="background-image: url('${this.image}')"></div>
      </div>
    `;
        return card;
    }
    flip() {
        if (this.isMatched)
            return;
        this.isFlipped = !this.isFlipped;
        this.element.classList.toggle("flipped", this.isFlipped);
    }
    markAsMatched() {
        this.isMatched = true;
    }
}
