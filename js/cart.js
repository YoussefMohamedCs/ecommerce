
let rowShop = document.getElementById("rowShop")
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];
let tBody= document.getElementById("tBody")

let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")
let btnDeleteAll = document.getElementById("btnDeleteAll")

cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 

function render(){ 
    let container="";
    for(let i =0 ; i<cart.length;i++){
        container+=`
        
        <tr class="text-center">
<td class="tdd">${cart[i].id}</td>
<td class="tdd">${(cart[i].title).slice(0,30)}</td>
<td class="tdd"><img src="${cart[i].image}" alt="" style="height:100px; width:100px;"></td>
<td class="tdd">${cart[i].count}</td>
<td  class="tdd" onclick="plusOne(${i})"><i class="fa-solid fa-plus"></i></td>
<td  class="tdd" onclick="minusOne(${i})"><i class="fa-solid fa-minus"></i></td>
<td  class="tdd">${cart[i].price +" $"}</td>
</tr>
        `
   

}
tBody.innerHTML=container
}
render()




{/* <tr>
<td>${data[i].id}</td>
<td>${(data[i].title).slice(0,30)}</td>
<td><img src="${data[i].image}" alt=""></td>
<td>${data[i].count}</td>
<td onclick="plusOne(i)"><i class="fa-solid fa-plus"></i></td>
<td onclick="minusOne(i)"><i class="fa-solid fa-minus"></i></td>
 <td>${cart.price}</td>
</tr> */}

function plusOne(index){
    cart[index].count+=1;
    render()
    localStorage.setItem("myCart" , JSON.stringify(cart))

}


function minusOne(index){
    if(cart[index].count >1){
        cart[index].count-=1;
        render()
        localStorage.setItem("myCart" , JSON.stringify(cart))
    }else{
        cart.splice(index,1)
        render()
        localStorage.setItem("myCart" , JSON.stringify(cart))
    }
    cart.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"
    cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 
}
btnDeleteAll.addEventListener("click" , function(e){
    localStorage.removeItem("myCart")
    cart=[]
    render()
    location.reload()
})
cart.length<1 ? btnDeleteAll.style.display="none" : btnDeleteAll.style.display="block"

