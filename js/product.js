var productObject = {
    id : [],
    name : [],
    price : [],
    priceStr : []
}
$(document).ready(function(){
    // Build a table 
    $('.block2-name').each(function(index,product){
        productObject.id[index] = index;
        productObject.name[index] = String(product.innerHTML).trim();
        $(this).on("click",function(){
            localStorage.setItem("clicked_item",index);
        })
    });
    $(".block2-price, .block2-newprice").each(function(index,price){
        productObject.price[index] = parseFloat(String(price.innerHTML).replace("$","").trim());
        productObject.priceStr[index] = String(price.innerHTML).trim();
    });


    // Search 
    $(".search-product > input").on("keyup",function(){

        if ($(this).val() != ""){
            var term = $(this).val().toLowerCase();
            productObject.name.forEach(function(e,i){
                if(e.toLowerCase().indexOf(term) != -1){
                    $(".block2").each(function(index){
                        if (i === index){
                            $(this).css("display","block");
                        }else{
                            $(this).css("display","none");
                        }    
                    });
                }else{
                }
            })
        }else{
            $(".block2").each(function(index){
                $(this).css("display","block"); 
            });
        }

       
        
        
     })


     localStorage.setItem("dataset",JSON.stringify(productObject))
})
window.onload = function(){
    document.getElementById('filter-bar').noUiSlider.on("end",function(){
        var lowerValue = parseInt(String(document.getElementById("value-lower").innerText).replace("$","").trim());
        var upperValue = parseInt(String(document.getElementById("value-upper").innerText).replace("$","").trim());
        document.querySelectorAll(".block2").forEach(function(element,index){
            if( lowerValue >= parseInt(productObject.price[index]) &&  parseInt(productObject.price[index]) <= upperValue){
                console.log(productObject.price[index]);
                element.style.display = 'block'
            }else{
                element.style.display = 'none'
            }

            
        });
    })
}