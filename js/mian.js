let rwoSecThree = document.getElementById("rwoSecThree")
let spanSeconds = document.getElementById("spanSeconds")
let rowSecFour = document.getElementById("rowSecFour")
let rowSecFive = document.getElementById("rowSecFive")
let rowSecFiveTwo = document.getElementById("rowSecFiveTwo")
let compareID = document.getElementById("compare")
let whishList = document.getElementById("whishList")
let cartCount = document.getElementById("cartCount")



let item;
let i= 60;


let cart = JSON.parse(localStorage.getItem("myCart")) || [];
let compare = JSON.parse(localStorage.getItem("myCompare")) || [];
let wishListVer = JSON.parse(localStorage.getItem("myList")) || [];
cartCount.textContent = cart.length; 
compareID.textContent = compare.length;
whishList.textContent = wishListVer.length; 





const getDataOne =async function (){
const response = await fetch("https://fakestoreapi.com/products")
const data = await response.json();
item  = data
inRow(data)
inRowTwo(data)
inRowThree(data)
rowFv(data)
}
getDataOne()

        function inRow(data){
        let rwoContainer =""
        for(let i =0 ; i < 8 ; i++){
            rwoContainer += `
            <div class="col-lg-3 col-md-4 col-md-6 mb-4">
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
        <a  class="btn btn-three" onclick="addToCart(${i})">Add To Cart</a>
            </div>
        </div>
            `
        }
        rwoSecThree.innerHTML=rwoContainer


        }

        setInterval(function(){
            
            i-=1;
            if(i>-1){
                spanSeconds.innerHTML=i
            }
            else{
                i=60
            }
        

        } , 1000)



        function inRowTwo(data){
            let rwoContainerFour="";
            for(let i =14 ; i<18  ; i++){
                rwoContainerFour +=`
                
                <div class="col-lg-3 mb-4 col-md-6">
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
            <a  class="btn btn-three" onclick="addToCart(${i})">Add To Cart</a>
                </div>
            </div>
                `
            }

            rowSecFour.innerHTML = rwoContainerFour


        }
        function inRowThree(data){
            let rwoContainerFour="";
            for(let i =16 ; i<20  ; i++){
                rwoContainerFour +=`    
                <div class="col-md-6 col-lg-3  mb-4 ">
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
            <a  class="btn btn-three" onclick="addToCart(${i})"> Add To Cart</a>
                </div>
            </div>
                `
            }

            rowSecFive.innerHTML = rwoContainerFour


        }

        function rowFv(data){


            let rwoContainerFour="";
            for(let i =0 ; i<12  ; i++){
                rwoContainerFour +=`
                
                <div class="col-lg-3 col-md-4 mb-4">
                <div class="item-section-three">
                    <div class="image-three">
                        <div class="overlay">
                            <i class="fa-regular fa-heart" onclick="addWishList(${i})"></i>
                            <i class="fa-solid fa-rotate" onclick="compareItem(${i})"></i>
                        </div>
                        <div class="image-last d-flex justify-content-center">
                        <img src="${data[i].image}" class="card-img-top img-fluid " style="height:200px; width:200px;" >
                        </div>
                    </div>
                    <div class="text-three mt-3">
                        <span class="stars ">
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                            <i class="fa-solid fa-star"></i>
                        </span>
                        <p class="title mt-2" >${(data[i].description).slice(0 ,30)}</p>
                         <p class="priceREal mt-2"> <span class="price-dash me-4">${(Math.random()*20).toFixed(2)+" $"}</span> <span class="real">${data[i].price +"$"}</span></p>
                         
                    </div>
                </div>
            </div>
                `
            }

            rowSecFiveTwo.innerHTML = rwoContainerFour

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
                wishListVer.push(chossenProduct)
            }

            localStorage.setItem("myList" , JSON.stringify(wishListVer))
            whishList.textContent = wishListVer.length

        }