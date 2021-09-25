const url = "";
const productContainer = document.querySelector(".latest-art-flex");

async function getLatest() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)

    }

    catch(error) {
        console.log(error);

    }
}