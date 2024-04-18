const form = document.querySelector(".form");
const titleInput = document.querySelector("#titleInput");
const priceInput = document.querySelector("#priceInput");
const cards = [];

form.onsubmit = (e) => {
    e.preventDefault();

    cards.push({
        title: titleInput.value, 
        price: priceInput.value
    });
    newCards();

    form.reset();
    // автоматически обнуляет все импуты, которые есть.
}
const sectionCards = document.querySelector(".cards");

function createNode (title, price){
    const div = document.createElement("div");
    const titleP = document.createElement("p");
    const priceP = document.createElement("p");

    div.classList.add("card");
    titleP.innerText = title;
    priceP.innerText = price;

    div.append(titleP, priceP);
    sectionCards.append(div);
}

function newCards() {
    sectionCards.innerHTML = "";
    for(let i = 0; i < cards.length; i++){
        const { title, price } = cards[i];
        createNode(title, price);
    }
}
