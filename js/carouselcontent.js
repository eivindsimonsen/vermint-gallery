const url = "";
const productContainer = document.querySelector(".current-image");

async function getCarousel() {

    try {
        const response = await fetch(url);
        const results = await response.json();
        console.log(results)
        
        `
        <div class="active">
        </div>
        <img src="images/mainimage.jpg" id="current-image__active" alt="#" />
        <img src="images/image5.jpg" alt="#" />
        <img src="images/image3.jpg" alt="#" />
        <img src="images/image8.jpg" alt="#" />
        `

    }

    catch(error) {
        console.log(error);

    }
}