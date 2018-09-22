
$(document).ready(function(){
    var wt = $(window).width() / 3 + "px";
    var gu = '<img src="img/gu01.png" >';
    var ch = '<img src="img/ch01.png" >';
    var pa = '<img src="img/pa01.png" >';
    var d = '<p>DRAW</p>';
    var w = '<p>YOU<br>WIN</p>';
    var l = '<p>YOU<br>LOSE</p>';
    var c = 0;
    var i = "";
    var r = "";
    var m = "";
    //グーを選んだ時
    $("#guImg").on("click",function(){
        $("#anser").html('<p>YOU</p>' + gu);
        $("#anser img").css("width", wt);

        var random=Math.floor( Math.random() *3); 
        if(random == 0){
            i = '<p>PC</p>' + gu;
            r = d; 
        }else if(random == 1){
            i = '<p>PC</p>' + ch;
            r = w; 
            c += 1;
            if(c >= 2){
                $("#count").html(c + '連勝中');
                $("#count").css("fontSize", $(window).width() / 20 + "px");   
            }
            m = "おめでとう！" 
            $("#nico").html(m);
            $("#nico").css("marginLeft", $(window).width() + "px");
            $('#nico').animate({
                'marginLeft': '-100px'            
              }, 
              {
                duration: 4000,
                'complete': function(){
                $("#nico").html("");
                $("#nico").css("marginLeft", ""); 
            }}
            );
        }else if(random == 2){
            i = '<p>PC</p>' + pa;
            r = l;
            c = 0;
            $("#count").html('');
        }
        $("#result").html(r); 
        $("#opponent").html(i);        
        $("#opponent img").css("width", wt);
        $("#result p").css("width", wt);
        $("#result p").css("font-size", $(window).width() / 20 + "px");
    })
    //チョキを選んだ時
    $("#chImg").on("click",function(){
        $("#anser").html('<p>YOU</p>' + ch);
        $("#anser img").css("width", wt);
        var random=Math.floor( Math.random() *3); 
        if(random == 0){
            i = '<p>PC</p>' + gu;
            r = l;
            c = 0;
            $("#count").html('');              
        }else if(random == 1){
            i = '<p>PC</p>' + ch;
            r = d;  
        }else if(random == 2){
            i = '<p>PC</p>' + pa;
            r = w; 
            c += 1;
            if(c >= 2){
                $("#count").html(c + '連勝中');
                $("#count").css("fontSize", $(window).width() / 20 + "px");   
            }
            m = "おめでとう！" 
            $("#nico").html(m);
            $("#nico").css("marginLeft", $(window).width() + "px");
            $('#nico').animate({
                'marginLeft': '-100px'            
              }, 
              {
                duration: 4000,
                'complete': function(){
                $("#nico").html("");
                $("#nico").css("marginLeft", "");
            }}
            );
        }
        $("#result").html(r); 
        $("#opponent").html(i); 
        $("#opponent img").css("width", wt);
        $("#result p").css("width", wt);
        $("#result p").css("font-size", $(window).width() / 20 + "px");
    })
    //パーを選んだ時
    $("#paImg").on("click",function(){
        $("#anser").html('<p>YOU</p>' + pa);
        $("#anser img").css("width", wt);
        var random=Math.floor( Math.random() *3); 
        if(random == 0){
            i = '<p>PC</p>' + gu;
            r = w; 
            c += 1; 
            if(c >= 2){
                $("#count").html(c + '連勝中');
                $("#count").css("fontSize", $(window).width() / 20 + "px");    
            }
            m = "おめでとう！" 
            $("#nico").html(m);
            $("#nico").css("marginLeft", $(window).width() + "px");
            $('#nico').animate({
                'marginLeft': '-100px'            
              }, 
              {
                duration: 4000,
                'complete': function(){
                $("#nico").html("");
                $("#nico").css("marginLeft", "");
            }}
            );          
        }else if(random == 1){
            i = '<p>PC</p>' + ch;
            r = l; 
            c = 0;
            $("#count").html('');
        }else if(random == 2){
            i = '<p>PC</p>' + pa;
            r = d;  
        }
        $("#result").html(r); 
        $("#opponent").html(i); 
        $("#opponent img").css("width", wt);
        $("#result p").css("width", wt);
        $("#result p").css("font-size", $(window).width() / 20 + "px");
    })
});
    