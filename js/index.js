import { productArray } from "../js/productArray.js";

const latest = document.querySelector(".latest-art-flex");

latest.innerHTML = "";

for (let i = 0; i < productArray.length; i++) {

if (productArray[i].latest === false) {
    continue;
} else if (productArray[i].sold === true) {
    continue;
}

    latest.innerHTML +=
    `
    <div>
        <div>
            <img src="${productArray[i].image}" alt="${productArray[i].alt}" onclick="location.href='specific.html'" style="cursor: pointer" />
        </div>
        <div>
            <p>${productArray[i].name}</p>
            <p>${productArray[i].price}</p>
        </div>
    </div>
    `
}

console.log(productArray);