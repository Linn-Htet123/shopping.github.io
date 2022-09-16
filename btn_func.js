// dom of search and select
let search = document.querySelectorAll("#search");
let select = document.querySelectorAll("#catogory");
// dom of search and select
$.get("https://fakestoreapi.com/products/", function(data, status){   
    for (let i = 0; i < search.length; i++) {
        // select catogory section
        select[i].addEventListener("change",function (){
           let selected = $(this).val()
           if(selected != "All catogory"){
                let filtered = api_data.filter(product =>{
                    
                    let catogory = product.category;
                    if(selected == catogory){
                        return product;
                    }
                    })
                    makingCard(filtered)
           }else{
            
                makingCard(data)
           }
        }) // select catogory seciton
     // search section
        let filterProduct;
      search[i].addEventListener('keyup',function(e){
        let keyWord = $(this).val().toLowerCase();
       if(keyWord.trim().length){
        let filtered = api_data.filter(product =>{
            let title = product.title.toLowerCase();
            let description = product.description.toLowerCase();
            let price = product.price;
            
            
           // console.log(keyWord.trim().length)
             
            if(title.indexOf(keyWord) > -1 || description.indexOf(keyWord) > -1 || price == Number(keyWord)){
                return product;
            }
        })
        filterProduct = filtered
       }
          
    
       
        makingCard(filterProduct)
      })
      //search section
     
    };
});

