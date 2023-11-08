let rowShop = document.getElementById("rowShop")
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];

let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")
let table = document.getElementById("table")

cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 
let item;

let tBodyWish = document.getElementById("tBodyWish")



function render(){ 

    let containerTwo =" ";
    for(let i =0 ; i<wishListVer.length;i++){
        containerTwo+=`
        <tr class="text-center">
<td class="tdd"><img src="${wishListVer[i].image}" alt="" style="height:50px; width:50px;"> ${(wishListVer[i].title).slice(0,30)}</td>
<td  class="tdd-two">${wishListVer[i].price +" $"}</td>
<td  class=" tdd-two" onclick="minusOne(${i})"><i class="fa-solid fa-minus"></i></td>

</tr>
        `
   

}
tBodyWish.innerHTML =  containerTwo
}
render()

function minusOne(index){
 
    wishListVer.splice(index,1)
        render()
        localStorage.setItem("myList" , JSON.stringify(wishListVer))
        wishListVer.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"
        cartCount.textContent = cart.length; 
        compareID.textContent = compare.length;
        whishList.textContent = wishListVer.length; 

    
}
btnDeleteAll.addEventListener("click" , function(e){

    localStorage.removeItem("myList")
    wishListVer=[]
    render()
    location.reload()
})

wishListVer.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"

