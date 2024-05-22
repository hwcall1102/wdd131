// get current date
const today = new Date();

const year = document.querySelector("#currentyear");
year.innerHTML = `<span>${today.getFullYear()}</span>`;

const modified = document.querySelector("#lastModified");
modified.innerHTML = `Last Modification <span>${document.lastModified}</span>`;
//

const products = [
    {
      id: fc-1888,
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: fc-2050,
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: fs-1987,
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: ac-2000,
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: jj-1969,
      name: "warp equalizer",
      averagerating: 5.0
    }
];

createOption(products);

function createOption(filteredProducts) {
    document.querySelector("#dropdown").innerHTML= "";
    filteredProducts.forEach(product => {
        let newProduct = document.createElement("option");
        newProduct.textContent = product.name;
        newProduct.setAttribute("value", `${product.id}`);
        
        document.querySelector("#dropdown").appendChild(newProduct);
    });
}
