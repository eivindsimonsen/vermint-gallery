import { productArray } from "../js/productArray.js";

const specific = document.querySelector(".specific-wrapper");
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

console.log(id);

specific.innerHTML = "";

for (let i = 0; i < productArray.length; i++) {

    //temporary
if (i === 1) {
    break;
}

    specific.innerHTML += 
    `
    <div>
        <img src="${productArray[i].image}" alt="${productArray[i].alt}" />
    </div>
    <div>
        <h2 class="blue-header blue-header__specific">${productArray[i].name}</h2>
        <h3>${productArray[i].size}</h3>
        <p class="paragraph-margin">${productArray[i].description}</p>
        <p>${productArray[i].created}</p>
        <p><span>${productArray[i].price}</span></p>
    </div>
    `
}

// might like section

const mightLike = document.querySelector(".might-like-flex");

mightLike.innerHTML = "";

for (let i = 0; i < productArray.length; i++) {

if (i === 3) {
    break;
}

    mightLike.innerHTML += 
    `
    <div class="might-like">
        <div>
            <img src="${productArray[i].image}" alt="${productArray[i].alt}" />
            <p>${productArray[i].name}</p>
        </div>
        <div class="might-like-wrapper">
            <p><span>${productArray[i].price}</span></p>
            <a href="specific.html" class="cta">View</a>
        </div>
    </div>
    `
}