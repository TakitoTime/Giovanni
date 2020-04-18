'use strict'

$(document).ready(function(){
    
    $("#banner").hide();
    $("#card").hide();
    $("#before_after").hide();
    $("#after").hide();
    $("#footer").hide();
    
    function Intervalo(){
        
        let banner=setInterval(function(){
            $("#banner").show("fade",2000);
        },0);
        
        let card=setInterval(function(){
            $("#card").show("fade",2000);
        },500);
        
        let before_after=setInterval(function(){
            $("#before_after").show("fade",2000);
        },1000);
        
        let after=setInterval(function(){
            $("#after").show("fade",2000);
        },1500);
        
        let pie_de_pagina=setInterval(function(){
            $("#footer").show("fade",2000);
        },2000);
    }
    
    var tiempo=Intervalo();
    
    var page1= $("#page1");
    var page2= $("#page2");
    var page3= $("#page3");
    var title= $("#title");
    
    title.css('display','block');
    page1.css('display', 'block');
    page2.css('display', 'none');
    page3.css('display', 'none');
    
    var before= $("#antes");
    var after= $("#despues");
    
    after.click(function(){

       if(page1.css('display') == 'block'){
            
              title.css('display','none');
              page1.css('display', 'none');
              page2.css('display', 'block');
           
       } else{
           
              page2.css('display', 'none');
              page3.css('display', 'block');
           
       }

    });
    
    before.click(function(){
        
      if(page3.css('display') == 'block'){
          
           page3.css('display', 'none');
           page2.css('display', 'block');
          
      } else{
          
           page2.css('display', 'none');
           page1.css('display', 'block');
           title.css('display','block');
          
      }
        
    });
    
    //Scroll Arriba De La Web
        
            $('.subir').click(function(e){
            e.preventDefault();

            $('html, body').animate({
               scrollTop: 0
            }, 500);
        });
});
    
