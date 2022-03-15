const requestURL = "js/data.json";

fetch(requestURL)
    .then((response) => response.json())
    .then((jsonObject) => {
    console.table(jsonObject);
    const businesses = jsonObject["businesses"];
    businesses.forEach(displayBusinesses);
});

function displayBusinesses(business) {
    // Create a section/card
    let card = document.createElement("section");
    let biznesName = document.createElement("p");
    let biznesAddress = document.createElement("p");
    let biznesPhone = document.createElement("p");
    let biznesWebsite = document.createElement("a");
    let biznesLogo = document.createElement("img");

    // Update the textContent of each new element
    biznesName.textContent = `${business.name}`;
    biznesName.setAttribute("id", "business-name");
    biznesAddress.textContent = `${business.address}`;
    biznesPhone.textContent = `${business.phone}`;
    biznesWebsite.textContent = `${business.website}`;
    biznesWebsite.setAttribute('href', business.website);
    biznesLogo.setAttribute("src", business.imageurl);
    biznesLogo.setAttribute("alt", `${business.name} logo`);
    
    // Appened list items in p-tags into the section/card
    card.appendChild(biznesLogo)
    card.appendChild(biznesName);
    card.appendChild(biznesAddress);
    card.appendChild(biznesPhone);
    card.appendChild(biznesWebsite);

    // Append card to the existing div.
    document.querySelector("div.cards").appendChild(card);
}

const gridView = document.querySelector("#directory-card");
const listView = document.querySelector("#directory-list");
const currentDivView = document.querySelector(".cards");

gridView.addEventListener('click', togridView);

function togridView() {
    currentDivView.classList.remove("list");
    currentDivView.classList.add("cards");
}

listView.addEventListener('click', tolistView);

function tolistView() {
    currentDivView.classList.remove("cards");
    currentDivView.classList.add("list");
}