const url = "";
const productContainer = document.querySelector(".gallery-grid");

async function getAll() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)

    }

    catch(error) {
        console.log(error);

    }
}