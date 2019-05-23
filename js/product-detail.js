
$(document).ready(function(){
    var productObject = JSON.parse(localStorage.getItem("dataset"));
    if(localStorage.getItem("clicked_item") != null || undefined){
        var clicked_Item = parseInt(localStorage.getItem("clicked_item"));
        $(".product-detail-name").html(productObject.name[clicked_Item]);
        $(".m-text17").html(productObject.priceStr[clicked_Item]);
    }

})