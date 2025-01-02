import { baseUrl } from "../../baseurl.js";

window.addEventListener("load", async function () {

    const products = document.getElementById("fashionProducts")
    try {
        const res = await fetch(`${baseUrl}/products`)
        const fashionProducts = await res.json();

        //checking if products are available
        if (fashionProducts.length == 0) {
            products.innerHTML = `<p>No fashion products available.</p>`
        } else {
            fashionProducts.forEach(el => {
                let fashionCard = document.createElement("div");
                fashionCard.classList.add("product"); //created class for styling

                fashionCard.innerHTML =
                    `
                         <img src = "${el.image}" alt ="${el.name}" class = "productImage">
                         <h3>${el.name}</h3>
                         <p>${el.description}</p>
                         <p>Price: $${el.price}</p>
                         <p>Rating: ${el.rating} ★</p>
                         `
                        products.appendChild(fashionCard)
            });
        }


    } catch (err) {
        alert("Something went wrong...")
        console.log(err)
    }
})