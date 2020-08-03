$(document).ready(function(){
    $(".header").hover(function(){
        $(".header").slideUp(7000);
        $(".header").slideDown(8000);
    })
});
$(document).ready(function(){
    $(".button").click(function(){
        $(".container-menu").show();
    })
    $(".view-menu").click(function(){
        $(".container-menu").show();
    })
    $(".contact-us").click(function(){
        $(".footer").show();
    })
});
var add=function(pricevalue1,pricevalue2){
    return(pricevalue1 + pricevalue1)   
}
$(document).ready(function(){
    $("#add-to-cart").click(function(event){
        event.preventDefault();
        var pricevalue1 = parseInt($("#crust").val());
        var pricevalue2 = parseInt($("#toppings").val());
        var result = add(pricevalue1 + pricevalue2); 
        $("#output").text(result);
    
    })
})