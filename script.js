//fetch data from fake store api
let api_data = [];
$.get("https://fakestoreapi.com/products/", function(data, status){
         api_data = [...data];
      makingCard(api_data)//making card function'
      cardClick(api_data)// function will work when user wnat to know detail about product while clicking the card
     
});
//fetch data from fake store api
//str shortenr
function strShortner(str,max =27){
    if(str.length > max){
        return str.substring(0,max) + "..."
    }else{
        return str
    }
}
//str shortenr
//making card function
function makingCard(api_data){
    $(".all-card-container").empty();
    api_data.forEach(el => {
        $(".all-card-container").append(`
    
        <div class="col-lg-3 col-md-4 col-12 d-flex justify-content-center mb-3 product">
            <div class="" style="width:96%; ">
                <div class="card-container product p-2 bg-white text-center rounded-2" id='${el.id}' style="cursor:pointer;">
                <div class="card-title-img-container" id="to_click">
                        <div class="card-img  text-center">
                        <img src="${el.image}" alt="" style="width:auto; height:100px;">
                    </div>
                    <div class="card-title-content-container">
                        <div class="card-title-container">
                            <div class="fw-bold pt-4" style="font-size: 18px;">${strShortner(el.title)}</div>
                        </div>
                        <div class="card-content-container px-2 text-black-50">
                            ${strShortner(el.description,57)}
                        </div>
                    </div>
                </div>
                    
                    
                </div>
                <div class="card-rating-price-container d-flex justify-content-between align-items-center">
                        <div class="price-container">
                            <div class="price" style="color:var(--text-btn-color)">$ ${el.price}</div>
                        </div>
                     <div class="rating-container">
                        <div class="" style="color: white;">rating : <span class="rate-num">${el.rating.rate}</span></div>
                    </div>
                    </div>
            </div>
        </div>
        `)
    });
   
}//making card function 
//  function will work when user wnat to know detail about product while clicking the card
function cardClick(api_data){
    $(".card-container").click(function(){
        $(".product-show-whole-container").removeClass("for-display")
        api_data.forEach(el =>{
            if($(this).attr("id") == el.id ){
                $(".product-show-whole-container").empty();
                $(".product-show-whole-container").append(`
                <div class="container">
    <div class="row  d-flex flex-column align-items-center justify-content-center vh-100 product-show-secondary-container">  
         <div class="col-12 bg-white rounded-4  product-show-container" id=${el.id} >
                <div class="cross-icon-container">
                    <i class="fa-solid fa-xmark fs-3 text-black"></i>
                </div>
                        <div class="row">
                            <div class="col-12 col-lg-6">
                                <div class="product-img-container">
                                    <img src="${el.image}" alt="" class="product-show-img">
    
                                </div>
                            </div>
                            <div class="col-12 col-lg-6">
                                <div class="product-show-title fw-bold ">
                                    ${el.title}
                                </div>
                                <div class="product-show-description">
                                    <div class="product-show-price fw-bold" style="color: var(--text-btn-color); font-size: 20px;">
                                      $  <span class="product-show-price-num">${el.price}</span>
                                    </div>
                                    <p class="m-0 p-0 text-black-50">
                                        ${el.description}
                                    </p>
                                  
                                </div>
                                
                              
                                <div class="show-product-cart-quantity-buy-container d-flex justify-content-between align-items-end my-2">
                                    
                                   
                                    <div class="show-product-cart-buy-container d-flex ">
                                        <div class="buy mx-2">
                                            Buy
                                        </div>
                                        <div class="cart d-flex align-itmes-center justify-content-between" id="${el.id}">
                                            <i class="fa-solid fa-cart-shopping fs-6 mt-1 " style="color: white;"></i>
                                            <div class="mx-2">Cart</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                    </div>
                    
            </div>
    </div>
             
          
                `)
            }
        });
        
    });
   // to show product detail, remove class that display 
    $(".product-show-whole-container").delegate(".cross-icon-container", "click",function(){
        $(".product-show-whole-container").addClass("for-display")
      });
};

{/* <div class="cart-container">
<a href="#" style="text-decoration: none;">
<div class="add-cart-btn text-white d-flex rounded-3" style="background-color: var(--text-btn-color);padding: 8px 20px;">
<i class="fa-solid fa-cart-shopping fs-6 mt-1 " style="color: white;"></i>
<div class="mx-2">Cart</div>
</div>

</a>
</div>
<div class="quantity form-row col-4">
                                        <input type="number" class="input-quantity" style="width:100%;" value="1" min="1" >
                                    </div> */}