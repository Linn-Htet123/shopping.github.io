

// let inputValue =  $(".quantity-container").find(".quantity-input").val();

$(".all-cart-whole-container").delegate(".quantity-plus","click",function(){
    let inputValue = $(this).parents(".quantity-container").find(".quantity-input").val();
    let plus_inputValue = Number(inputValue) + 1;
    $(this).parents(".quantity-container").find(".quantity-input").val(plus_inputValue);
    //console.log($(".cart-each-whole-container").toArray());
    let unit_price = Number($(this).parentsUntil($(".all-cart-whole-container")).find($(".unit-price")).attr("unitPrice"));
    let finalValue = unit_price * plus_inputValue
    $(this).parentsUntil($(".all-cart-whole-container")).find($(".cart-total-price")).text(finalValue.toFixed(2))
    cartTotal ()
})
$(".all-cart-whole-container").delegate(".quantity-minus","click",function(){
    let inputValue = Number($(this).parents(".quantity-container").find(".quantity-input").val());
    let minus_inputValue = inputValue - 1;
    if(minus_inputValue != 0){
        $(this).parents(".quantity-container").find(".quantity-input").val(minus_inputValue);
        let unit_price = Number($(this).parentsUntil($(".all-cart-whole-container")).find($(".unit-price")).attr("unitPrice"));
        let finalValue = unit_price * minus_inputValue
        $(this).parentsUntil($(".all-cart-whole-container")).find($(".cart-total-price")).text(finalValue.toFixed(2) )
        cartTotal ()
    }
});
$(".all-cart-whole-container").delegate(".quantity-input","keyup",function(){
     let inputValue =  $(this).val();
     let unit_price = Number($(this).parentsUntil($(".all-cart-whole-container")).find($(".unit-price")).attr("unitPrice"));
     let finalValue = unit_price * inputValue
     $(this).parentsUntil($(".all-cart-whole-container")).find($(".cart-total-price")).text(finalValue.toFixed(2))
     cartTotal ()
})
$(".all-cart-whole-container").delegate(".delete-btn","click",function(){
    let badge_count = $(".cart-each-whole-container").toArray().length -1
    if(badge_count == 0){
        $(".badges").addClass("badge-display");
        $(".cart-total-amount").text("0")
    }else{
        $(".badges").text(badge_count)
        cartTotal ()
    }
    
    $(this).parentsUntil($(".all-cart-whole-container")).remove();
   
});

function cartTotal (){
    let total = Number($(".cart-total-price").toArray().map(el =>el.innerHTML).reduce((x,y) => Number(x) + Number(y)));
    $(".cart-total-amount").text(total.toFixed(2))
}

$(".cart-container").click(function(){
    console.log($(".cart-each-whole-container").toArray().length)
    if($(".cart-each-whole-container").toArray().length == 0){
        $(".all-cart-whole-container").html(`
    <div class="col-12 text-center empty-cart ">
        <i class="fa-solid fa-bag-shopping mb-4" style="font-size:80px; color:var(--text-btn-color)"></i>
       <h3 class="mb-4"style="color: var(--text-btn-color);"> Your Cart is empty!</h3>
       <a href="index.html"class="p-3 text-white rounded-2" style="background-color: var(--text-btn-color);text-decoration:none;">
                                Please purchase something
         </a>
    </div>
        `)
    }
   
    $(".cart-whole-container").removeClass("cart-display")
})
$(".cart-cross-icon-container").click(function(){
    $(".cart-whole-container").addClass("cart-display")
})