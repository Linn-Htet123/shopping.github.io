$(".product-show-whole-container").delegate(".cart","click",function (){
    let titleSrc = $(this).parentsUntil($(".product-show-secondary-container")).find($(".product-show-title")).text();
    let imgSrc = $(this).parentsUntil($(".product-show-secondary-container")).find($(".product-show-img")).attr("src")
    let priceSrc = $(this).parentsUntil($(".product-show-secondary-container")).find($(".product-show-price-num")).text();
    $(".badges").removeClass("badge-display");
    
  let currentId = $(this).attr("id");
 if($(".cart-each-whole-container").toArray().map(el => el.id).includes(currentId)){
    alert("the product has already been added")
 }else{
    $(".badges").text($(".cart-each-whole-container").toArray().length + 1);
    
   $(".all-cart-whole-container").append(`
   <div class="row d-flex align-items-center cart-each-whole-container mb-3" id="${currentId}">
        <div class="col-md-6 col-12">
            <div class="d-flex align-items-center justify-content-around cart-img-title">
                <div class="cart-product-img-container mx-2">
                    <img src="${imgSrc}" alt="" class="cart-product-img" style="width:100px; height: 100px;">
                </div>
                <div class="cart-product-title fw-bold px-2" style="font-size:18px ;width:100%;">
                    ${titleSrc}
                </div>
            </div>
        </div>
        <div class="col-md-6 col-12 quantity-number">
            <div class="d-flex justify-content-between align-items-center">
                <div class="unit-price-container">
                    <h5 style="color:var(--text-btn-color)" class="p-0 m-0">Unit price</h5 >
                    <div class="text-black-50">$ <span class="unit-price" unitPrice="${priceSrc}">${priceSrc}</span></div>
                </div>
                <div class="quantity-container d-flex">
                    <div class="quantity-minus">
                        <i class="fa-solid fa-minus"></i>
                    </div>
                    <input type="text" value="1" min="1"style="width:50px;" class=" quantity-input">
                    <div class="quantity-plus">
                        <i class="fa-solid fa-plus"></i>
                    </div>
                </div>
                <div class="cart-total-price-container">
                    <h5 class="m-0 p-0" style="color:var(--text-btn-color)">Toal price</h5>
                    <div class="text-black-50">$ <span class="cart-total-price">${priceSrc}</span></div>
                </div>
                <div class="delete-btn" style="cursor:pointer">
                    <i class="fa-solid fa-trash text-danger fs-5"></i>
                </div>
            </div>
        </div>
  </div>
   `)
 }
 if($(".cart-each-whole-container").toArray().length > 0){
    console.log($(".empty-cart").addClass("empty-display"))
}
 cartTotal ()
})