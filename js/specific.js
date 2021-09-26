const specific = document.querySelector(".specific-wrapper");

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");
console.log(id);

const url = "https://www.vermintgallery.com/wp-json/wc/store/products/" + id;

async function fetchId() {
    try {
        const response = await fetch(url);
        const getId = await response.json();

        console.log(getId)

        createHTML(getId)
    }
    catch (error) {
        console.log(error)
    }
}

fetchId();

function createHTML(getId) {
    document.title = `Vermint | ${getId.name}`;

    specific.innerHTML += 
    `
    <div>
        <img src="${getId.images[0].src}" alt="${getId.description}" />
    </div>
    <div>
        <h2 class="blue-header blue-header__specific">${getId.name}</h2>
        <h3>${getId.short_description}</h3>
        <p class="paragraph-margin">${getId.description}</p>
        <p>${getId.tags[0].name}</p>
        <p><span>${getId.prices.price.slice(0, 4)} kr</span></p>
    </div>
    `
}

// might like section

const url2 = "https://www.vermintgallery.com/wp-json/wc/store/products";
const mightLike = document.querySelector(".might-like-flex");

async function getProducts() {
    try {
        const response = await fetch(url2);
        const getResults = await response.json();
        console.log(getResults)

        const product  = getResults;

        mightLike.innerHTML = ""

        for (let i = 0; i < product.length; i++) {

            if (i === 3) {
                break;
            }

            mightLike.innerHTML += 
            `
            <div class="might-like">
            <div>
                <img src="${product[i].images[0].src}" alt="${product[i].description}" />
                <p>${product[i].name}</p>
            </div>
                <div class="might-like-wrapper">
                    <p><span>${product[i].prices.price.slice(0, 4)} kr</span></p>
                    <a href="specific.html?id=${product[i].id}" class="cta">View</a>
                </div>
            </div>
            `
        }
    }
    catch (error) {
        console.log(error);
    }
}

getProducts();