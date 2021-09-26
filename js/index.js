const url = "https://www.vermintgallery.com/wp-json/wc/store/products?per_page=100";

const latest = document.querySelector(".latest-art-flex");

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);

        const product  = getResults;

        latest.innerHTML = "";

        for (let i = 0; i < product.length; i++) {
            if (i === 3) {
                break;
            }

            latest.innerHTML += 
            `
            <div>
                <div>
                    <img src="${product[i].images[0].src}" alt="${product[i].description}" onclick="location.href='specific.html?id=${product[i].id}'" style="cursor: pointer" />
                </div>
                <div>
                    <p>${product[i].name}</p>
                    <p>${product[i].prices.price.slice(0, 4)} kr</p>
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