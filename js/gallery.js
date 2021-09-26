const url = "https://www.vermintgallery.com/wp-json/wc/store/products?per_page=100";
const gallery = document.querySelector(".gallery-grid");

async function getProducts() {
    try {
        const response = await fetch(url);
        const getResults = await response.json();
        console.log(getResults);

        const product  = getResults;

        gallery.innerHTML = "";

        for (let i = 0; i < product.length; i++) {
            gallery.innerHTML += 
            `
            <div class="gallery-flex-content">
                <img src="${product[i].images[0].src}" alt="${product[i].description}" onclick="location.href='specific.html?id=${product[i].id}'" style="cursor: pointer" />
                <p>${product[i].name}</p>
                <hr />
                <p>${product[i].prices.price.slice(0, 4)} kr</p>
            </div>
            `
        }

        
    }
    catch (error) {
        console.log(error);
    }
}

getProducts();