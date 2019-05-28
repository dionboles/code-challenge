// object to hold product infomation
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
     var sorting = $selection2.val();
    //   made a function for the loop so it would save time  
        function block2Loop(lowRange,hightRange){
            productObject.price.forEach(function(e,i){
                $(".block2").each(function(index){
                    if(productObject.price[index] >= lowRange && productObject.price[index] <= hightRange){
                            $(this).css("display","block");
                    }else{
                            $(this).css("display","none");
                    }    
                });
                
                });
        }
        $($selection2[1]).on("change",function(a){
            var price  = $selection2.select2('data')[0].text;
            switch (price) {
                case "$0.00 - $50.00":
                    block2Loop(0,50);
                break;
                case "$50.00 - $100.00":
                    block2Loop(50,100);
                break;
                case "$100.00 - $150.00":
                    block2Loop(100,150);
                break;
                case "$150.00 - $200.00":
                    block2Loop(150,200);
                break;
                case "$200.00+":
                        block2Loop(200,300);
                break;
                default:
                    $(".block2").each(function(index){
                        $(this).css("display","block"); 
                    });
                break;
            }
        });
     localStorage.setItem("dataset",JSON.stringify(productObject));
})
window.onload = function(){
    // ran
    document.getElementById('filter-bar').noUiSlider.on("end",function(){
        var lowerValue = parseInt(String(document.getElementById("value-lower").innerText).replace("$","").trim());
        var upperValue = parseInt(String(document.getElementById("value-upper").innerText).replace("$","").trim());
        if (lowerValue === 50 && upperValue == 200){
            document.querySelectorAll(".block2").forEach(function(element,index){
          
                element.style.display = 'block';
        });
    }else{
        document.querySelectorAll(".block2").forEach(function(element,index){
            if( parseInt(productObject.price[index]) >= lowerValue && parseInt(productObject.price[index]) <= upperValue){
                element.style.display = 'block';
            }else{
                element.style.display = 'none';
            }
        });
       
    }
    })



}