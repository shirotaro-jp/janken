//ブラウザの横幅を元にcssを変える
$(document).ready(function () {
    wsize = $(window).width();
    $("#arrow span").css("left", wsize / 2 - 50 + "px");
    if(wsize <= 770){
       $("#title").css("font-size", wsize / 20 + "px");
    }
    if(wsize <= 770){
        $("#no").css("font-size", wsize / 20 + "px");
     }
});
$(window).resize(function () {
    wsize = $(window).width();
    $("#arrow span").css("left", wsize / 2 - 50 + "px"); 
    if(wsize <= 770){
        $("#title").css("font-size", wsize / 20 + "px");
    }
    if(wsize <= 770){
        $("#no").css("font-size", wsize / 20 + "px");
     }
});