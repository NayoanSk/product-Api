
let url = "https://fakestoreapi.com/products";
let allProducts = [];
fetch(url)
.then((res)=> res.json())
.then((res)=> {
    allProducts = res;
    // console.log(allProducts)
    productFunc(allProducts);
})
function productFunc(allProduct){
    let formProd  = document.getElementById("formProd");
    formProd.addEventListener("submit", (e)=>{
    e.preventDefault();
    let inputProd = e.target.inputProd.value;
    let chaText = inputProd.toLowerCase();
    e.target.inputProd.value = "";
    let filtProduct = allProducts.filter((values)=>{
        let prodTitle = values.title;
        let chanTitle = prodTitle.toLowerCase();
        return chanTitle.includes(chaText);
    })
    productFunc(filtProduct);
});
    let roots = document.getElementById("root");
    roots.innerHTML = "";
    allProduct.forEach((value)=>{
        roots.innerHTML += produCard(value)
    })
}
function produCard(information){
    let {price, description, title, image} = information;
    let htmlCode = `
    <div class="cardProd">
        <img src="${image}" alt="">
        <h3>Title:${title.length> 20 ? title.slice(0, 20) + "...." : title}</h3>
        <h4>Price:${price}</h4>
        <p>Description:${description.length> 40 ? description.slice(0, 40) + "...." : description} </p>
    </div>
    `;
    return htmlCode
}



/*let formProd = document.getElementById("formProd");
formProd.addEventListener("submit", (e)=>{
    e.preventDefault();
    let inputProd = e.target.inputProd.value;
    let changeText = inputProd.toLowerCase();
    e.target.inputProd.value = "";
    let productAll = allProducts.filter((value)=>{
        let prodTitle = value.title;
        let changeTitle = prodTitle.toLowerCase();
        return changeTitle.includes(changeText);
    })
    let roots = document.getElementById("root");
    productAll.forEach((value)=>{
        roots.innerHTML += produCard(value)
    })
})
*/


// let formProd  = document.getElementById("formProd");
// formProd.addEventListener("submit", (e)=>{
//     e.preventDefault();
//     let inputProd = e.target.inputProd.value;
//     let chaText = inputProd.toLowerCase();
//     e.target.inputProd.value = "";

//     console.log(chaText);
// })