const products = document.querySelector("#products")

const LINKS = [
    {
        item: "",
        item2: "",
        item3: "",
        
    },
]

    for (elem in LINKS) {

        products.innerHTML += ` html code with items => ${LINKS[elem].item} ${LINKS[elem].item2} ${LINKS[elem].item3}`

    }
