const URL = PRODUCT_INFO_URL + localStorage.getItem("idproduct") + EXT_TYPE
let producto = {};
let commentsArray = [];


document.addEventListener("DOMContentLoaded", ()=> {
    fetch(URL)
        .then(resp => resp.json())
        .then(producto => {
            document.getElementById("productName").innerHTML = producto.name;
            document.getElementById("productCost").innerHTML = producto.cost;
            document.getElementById("productCurrency").innerHTML = producto.currency;
            document.getElementById("productDescription").innerHTML = producto.description;
            document.getElementById("productcate").innerHTML = producto.category;
            document.getElementById("productCount").innerHTML = producto.soldCount;
    })
});
