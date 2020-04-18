'use strict'

$(document).ready(function(){
    $("#banner").hide();
    $("#content").hide();
    $("#after").hide();
    
    function Intervalo(){
        
        var banner=setInterval(function(){
            $("#banner").show("fade",2000);
        },0);
        
        var content=setInterval(function(){
            $("#content").show("fade",2000);
        },500);
        
        var after=setInterval(function(){
            $("#after").show("fade",2000);
        },1000);
    }
    
    var tiempo=Intervalo();
    
});