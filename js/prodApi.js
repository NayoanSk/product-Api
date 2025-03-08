
let url = "https://fakestoreapi.com/users";
let allCarts = [];
fetch(url)
.then((res)=> res.json())
.then((res)=>{
    allCarts = res;
    console.log(allCarts);
})