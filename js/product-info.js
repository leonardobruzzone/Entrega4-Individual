const URL = PRODUCT_INFO_URL + localStorage.getItem("idproduct") + EXT_TYPE
let producto = {};
let commentsArray = [];


document.addEventListener("DOMContentLoaded", ()=> {

    fetch(URL)
    .then(resp => resp.json())
    .then(data => {
        producto = data
        document.getElementById("productName").innerHTML = producto.name;
        document.getElementById("productCost").innerHTML = producto.cost;
        document.getElementById("productCurrency").innerHTML = producto.currency;
        document.getElementById("productDescription").innerHTML = producto.description;
        document.getElementById("productcate").innerHTML = producto.category;
        document.getElementById("productCount").innerHTML = producto.soldCount;
       

    })
})


for (let i=0; i< arrayImages.length; i++)






   function mostrarComentarios() {
    
    let Comentarios = "";
    let jsonComentarios = commentsArray;

    for (let i = 0; i < commentsArray.length; i++) {
          

        Comentarios += `
    
        <div  class="list-group-item list-group-item-action">
            <div class="row">
                <div class="col-3">
                    
                <div class="col">
                    <div class="d-flex w-100 justify-content-between">
                        <h4 class="mb-1"><small class="fw-bolder h6">${jsonComentarios[i].user}${" "}</small>-${" "}${jsonComentarios[i].dataTime}${" "}-${" "}</h4>
                       <p class="mb-1">${jsoncomentarios[i].description}</p>
                       </div>
                </div>
            </div>
        </div>
        `
}
    document.getElementById("productComments").innerHTML = Comentarios;
};

