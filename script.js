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
      
 function getSize (size) {
    if (size === 0) {
        return "Pizza Pie"
   }else if (size === 1) {
        return "small"
    }else if (size === 2) {
        return "Medium"
    }else if (size === 3) {
     return "large"
   }
 };


$(document).ready(function(){
    $("#submit").click(function(event){
        event.preventDefault();
        var type = $('#type').val();
        var size = parseInt($("input[name='size']:checked").val());
        var crust = parseInt($("input[name='crust']:checked").val());
        var amount = parseInt($("#number").val());
        var value=[200, 500, 800,1000];
        var sumToppings = 0;
        $("input[name='toppings']:checked").each(function(){
        sumToppings+= parseInt($(this).val());
    })

    var subTotal = ((value[size]) + crust + sumToppings)* amount;

    if (size =='undefined'|| (value[size]) == 'undefined' || crust == 'NaN' || sumToppings == '' || subTotal == 'NaN'){         
      $("#subtotal").html('Kindly select at least one size, one crust and a topping')
    } else{
         $("#subtotal").html("<strong>Your Pick:</strong>" + "<br/>"+"Type:" + type + "<br/>"+ " Size: " + getSize(size)+ "<br/>"+" No. of Pizzas ordered " + amount+ "<br/>"+ " Price: Kshs " + value[size] + "<br/>" + " crust: Kshs. " + crust + "<br/>"+ " Toppings: Kshs "+ sumToppings + "<br/>"+" <strong> Total: Kshs </strong>" + subTotal);
        $(".deliver").show();
    }
    });
    $("#delivery").click(function(){
        $(".delivery").show()
      });
      
      $("#confirm").click(function(){
        event.preventDefault()
        var town=["Caren", "Ngong", "Kiambu Road", "Ngong Road","WestLands",]
        var charges=[100,150,150,100,100]
        var name = $("#name").val();
        var contact = $("#contact").val();
        var location = town[$("#location").val()];
        var street = $("#street").val();
        var delivery = charges[$("#location").val()];
        if (name == '' || contact == '' || location == ''|| street== '' ){
          swal("Error", "Kindly fill all the fields", "error");        
        } else {
          swal('Hello ' +name + " we have received your order. And will be delivered to "+ street +' Street, ' + location + " in less than 30 Min. Delivery charges: Ksh " + delivery);
        } 
        })
