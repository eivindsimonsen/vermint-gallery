import { productArray } from "../js/productArray.js";

const gallery = document.querySelector(".gallery-grid");

gallery.innerHTML = "";

for (let i = 0; i < productArray.length; i++) {

    if (productArray[i].sold === true) {
        continue;
    }
    
    gallery.innerHTML += 
    `
    <div class="gallery-flex-content">
            <img src="${productArray[i].image}" alt="${productArray[i].alt}" onclick="location.href='specific.html?id=${productArray[i].id}'" style="cursor: pointer" />
            <p>${productArray[i].name}</p>
            <hr />
            <p>${productArray[i].price}</p>
          </div>
    `
}