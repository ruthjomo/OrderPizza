$(document).ready(function(){
    $(".header")(function(){
        $(".header").slideUp(7000);
        $(".header").slideDown(7000);
    })
});
$(document).ready(function(){
    $(".btn btn-success").click(function(){
        $(".container-menu").show();
    })
})