
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];

let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")
let btnDeleteAll = document.getElementById("btnDeleteAll")
let row = document.getElementById("row")

cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 


function render(){ 

    let containerTwo =" ";
    for(let i =0 ; i<compare.length;i++){
        containerTwo+=`
  
        <div class="col-lg-4 mb-4">
        <div class="item-section-three d-flex justify-content-center">
            <div class="image-three">
                <img src="${compare[i].image}" class=" me-5 card-img-top img-fluid" style="height:150px; width:150px;"  alt="">
            </div>
            <div class="text-three mt-3 ms-4">
                <span class="stars ">
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                    <i class="fa-solid fa-star"></i>
                </span>
                <p class="title mt-2" >${(compare[i].description).slice(0 ,40)}</p>
                 <p class="priceREal mt-2"> <span class="price-dash me-4">${(Math.random()*20).toFixed(2)+" $"}</span> <span class="real">${compare[i].price +"$"}</span></p>
                 
            </div>
            <a class="btn btn-close" onclick="del(${i})"></a>
        </div>
        
    </div>
        `
   

}
row.innerHTML =  containerTwo
}
render()


btnDeleteAll.addEventListener("click" , function(e){

    localStorage.removeItem("myCompare")
    compare=[]
    render()
    location.reload()

})
compare.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"



function del(index){
    compare.splice(index,1)
    render()
    localStorage.setItem("myCompare" , JSON.stringify(compare))
    compare.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"

    cartCount.textContent = cart.length; 
    compareID.textContent = compare.length;
    whishList.textContent = wishListVer.length; 
}