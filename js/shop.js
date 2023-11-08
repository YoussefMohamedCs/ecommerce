let rowShop = document.getElementById("rowShop")
let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];

let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")

cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 
let item;


const getDataOne =async function (){
    const response = await fetch("https://fakestoreapi.com/products")
    const data = await response.json();
    item=data
    
    display(data)
    }
    getDataOne()



    function display(data){
let container ="";
for(let i =0 ; i < data.length ; i++){
    container+=`
    
    <div class="col-lg-3 mb-4">
            <div class="item-section-three">
                <div class="image-three">
                    <div class="overlay">
                        <i class="fa-regular fa-heart" onclick="addWishList(${i})"></i>
                        <i class="fa-solid fa-rotate" onclick="compareItem(${i})"></i>
                    </div>
                    <img src="${data[i].image}" class="card-img-top img-fluid" style="height:300px"  alt="">
                </div>
                <div class="text-three mt-3">
                    <span class="stars ">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </span>
                    <p class="title mt-2" >${(data[i].description).slice(0 ,70)}</p>
                     <p class="priceREal mt-2"> <span class="price-dash me-4">${(Math.random()*20).toFixed(2)+" $"}</span> <span class="real">${data[i].price +"$"}</span></p>
                     
                </div>
        <a class="btn btn-three" onclick="addToCart(${i})">Add To Cart</a>
            </div>
        </div>
    
    
    
    
    `
}
rowShop.innerHTML=container


    }


    function addToCart(index){
        let chossenProduct = item[index]
        let findedProduct = cart.find((product) => product.id === chossenProduct.id)
        if(findedProduct){
            findedProduct.count +=1;
        }else{
            cart.push({...chossenProduct , count:1})
        }

        localStorage.setItem("myCart" , JSON.stringify(cart))
        cartCount.textContent = cart.length

    
    }



    function compareItem(index){
        let chossenProduct = item[index]
        let findedProduct = compare.find((product) => product.id === chossenProduct.id)
        if(findedProduct){
            findedProduct.count +=1;
        }else{
            compare.push({...chossenProduct , count:1})
        }

        localStorage.setItem("myCompare" , JSON.stringify(compare))
        compareID.textContent = compare.length

    }


    
    function addWishList(index){
        let chossenProduct = item[index]
        let findedProduct = wishListVer.find((product) => product.id === chossenProduct.id)
        if(findedProduct){
            findedProduct.count +=1;
        }else{
            wishListVer.push({...chossenProduct , count:1})
        }

        localStorage.setItem("myList" , JSON.stringify(wishListVer))
        whishList.textContent = wishListVer.length

    }