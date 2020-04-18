'use strict'

$(document).ready(function(){
    
    $("#banner").hide();
    $("#memories").hide();
    $("#after").hide();
    $("#footer").hide();
   
    //Recuerdos
    if(window.location.href.indexOf('memories')> -1){
        var posts=[
                    {
                        img: 'img/recuerdos/2017-06-29.jpg',
                        title:'Una de varias veces que fuimos a Friduchas',
                        date: 'Dia 29 de Junio del 2017',
                        content:'Me acuerdo que ese dia fuimos a friduchas porque yo estaba trabajando en marcos llantimundo y tu estabas en un gimnasio cercano, en aquel tiempo todavia no eramos pareja, pero en aquel tiempo ya empezabamos a salir mas seguido juntos. Friduchas fue uno de los lugares, sino el lugar mas importante en esta relacion, ahi fueron nuestrar primeras citas y tiene un valor sentimental para ambos.'      
                    },
                    
                    {
                        img: 'img/recuerdos/2018-01-27.jpg',
                        title:'De aquellas veces que iba a visitarte a la casa de tu abuelita',
                        date: 'Dia 27 de Enero del 2018',
                        content:'El aquellos tiempos yo iba a la casa de tu abuelita saliendo de trabajar, la casa de tu abuelita no quedaba muy retirado de mi trabajo y aprobechaba para ir a verte, en ese tiempo todavia no eramos pareja, pero yo ya sentia algo por ti. <br/> <br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-02-02.jpg',
                        title:'Cuando fuimos a comer sushi',
                        date: 'Dia 2 de Febrero del 2018',
                        content:'Ese día fui por ti a la escuela, para ir a comer sushi cerca de UJED, ya llevábamos tiempo viéndonos y saliendo, ese día yo iba decidido a decirte lo que sentía, pero no me animaba, hasta que de camino a tu casa te lo dije y ese día fue nuestro primer beso. <br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-02-10.jpg',
                        title:'ReChupete',
                        date: 'Dia 10 de Febrero del 2018',
                        content:'Me acuerdo que ese día quedamos de ir a almorzar, pero si mal no me acuerdo no sabíamos ni a donde ir, hasta que al final entramos a rechupete, almorzamos bien rico, (se me antojaron tus tamales xD), y de ahí fuimos un rato al parque Morelos. <br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-03-15.jpg',
                        title:'Parque Morelos',
                        date: 'Dia 15 de Marzo del 2018',
                        content:'No me acuerdo muy bien de ese día xD, pero creo que quedé contigo de ir un rato al parque Morelos, me suena que fui por ti a UJED y de ahí fuimos un rato al parque, para esas fechas todavía no éramos pareja, pero ya estábamos avanzando es eso xD. <br/><br/><br/>'      
                    },
                
                    {
                        img: 'img/recuerdos/2018-04-24.jpg',
                        title:'Ritual',
                        date: 'Dia 24 de Abril del 2018',
                        content:'Este lo recuerdo muy bien xD, esa fue la primera vez que fuimos a ritual, ese día queríamos ir a un bar, pero no sabíamos a cuál ir, estuvimos investigando que bares eran buenos, hasta que al final terminamos yendo ahí, lo cual hasta la fecha fue una buena decisión, ese día nos la pasamos muy bien ambos, estuvimos platicando muchas cosas que desconocíamos el uno del otro y podría decir que ritual fue una de las cosas que ayudo en nuestra relación. <br/><br/><br/><br/>'      
                    },
                
                    {
                        img: 'img/recuerdos/2018-05-05.jpg',
                        title:'El Quince de tu hermana',
                        date: 'Dia 5 de Mayo del 2018',
                        content:'Ese día fue el quince de tu hermana, bueno creo que ese día no cumple años xD, pero ese día la festejaron, recuerdo que ese día estaba nervioso, porque era la primera vez que vería a tus papas, yo me imaginaba que sería más incómodo, pero la verdad no fue así, ese día me la pase muy bien contigo, estuvimos platicando mucho y por cierto fue la primera vez que comí algo echo por tu papa, esa discada me supo a gloriaaaaaa, la salsa estaba mmm..., y do mames que ricoooooo, pero bueno, ese día me la pase muy bien contigo.'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-06-06.jpg',
                        title:'Otro dia en Ritual',
                        date: 'Dia 6 de Junio del 2018',
                        content:'Después de la primera vez en ritual, quisimos volver a ir, ya no me acuerdo porque salió a la idea, pero se nos ocurrió comprar modelo negra, ahí está que pedimos una tina de modelos negras con nuestros tarritos michelados, nuestros aros de cebolla como es costumbre y no se esa vez compramos nachos, pero total xD, muy agradable el ambiente, y sobre todo tu compañía. <br/><br/><br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-06-14.jpg',
                        title:'Mas De Ritual',
                        date: 'Dia 14 de Junio del 2018',
                        content:'Al final se nos hizo costumbre ir a ritual, siempre que había chance y dinero xD íbamos por unas caguasaquis, al final ritual se volvió un lugar en el cual ambos podemos platicar de muchas cosas y recordar cosas que a ambos nos hacían feliz, la calle "Justo Sierra" se volvió la calle que nos representa a ambos, porque en esa calle estaba Friduchas, esta De Rechupete, Rincón Victoria y obviamente esta Ritual.<br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-06-16.jpg',
                        title:'Salad Haus',
                        date: 'Dia 16 de Junio del 2018',
                        content:'Tenía mucho tiempo que no íbamos a salad juntos, bueno, de echo como tal nunca fuimos juntos xD, esa fue la primera vez que fuimos tu y yo, almorzamos bien rico, y por cierto hasta ahora no eh probado unos mejores chilaquiles que los que probé ahí, a menos que en algún momento tu papa se aviente unos chilaquiles xdxdxd, ahhh por cierto Salad Haus también está en la "Justo Sierra" xDxD.'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-07-28.jpg',
                        title:'Hasta que por fin!!!!!',
                        date: 'Dia 28 de Julio del 2018',
                        content:'Hasta ahora, alguien externo a nuestra historia "diría hay que bonita pareja", pero aquí el detalle es que todavía no éramos pareja, porque, porque alguien no quería xDxD, pero bueno aquí lo importante es que el día 28 de Julio del 2018, en la quinceañera de una prima, después de que cierto sujeto le pidió ser su pareja 2 veces y no quería, ese día ese sujeto se lo dijo por tercera vez, algo curioso es que el sujeto, ósea "yo" no tenía la intención de volvértelo a pedir, yo iba con la mentalidad de que íbamos como amigos, yo me había dicho que no te lo volvería de pedir, quería que tú me lo pidieras, y pues en cierta forma tú me lo pediste, tu iniciaste a que te lo volviera a pedir, hasta que por fin me dijiste que sí, y pues a un año de ese día seguimos juntos.'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-08-05.jpg',
                        title:'Aqui con mi hermana',
                        date: 'Dia 5 de Agosto del 2018',
                        content:'Ese día invitamos a mi hermana a venir con nosotros a ritual, para esto creo que tu no conocías a mi hermana, yo te decía que era bien chida y que te ibas a llevar bien con ella, que por cierto así fue, las dos se llevaron muy bien y hay que admitir que un tercero no está mal algunas veces xD.'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-08-28.jpg',
                        title:'El primer mes formal',
                        date: 'Dia 28 de Agosto del 2018',
                        content:'Oficialmente teníamos un mes de relación, ese día fuimos al huarichic, que por cierto no tengo fotos de cuando fuimos la primera vez :(, pero bueno, ese día fui a tu casa, te regale un bonito ramo de flores y te invite a comer, por cierto, comimos bien rico, y de ahí fuimos por unas nieves de santa rosa, a por cierto. <br/><br/> Muy bonita foto la que tomaste. <br/><br/><br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-09-10.jpg',
                        title:'Una tarde lluviosa y helada',
                        date: 'Dia 10 de Septiembre del 2018',
                        content:'No me acuerdo que película fuimos a ver, a ver si tú te acuerdas, pero saliendo de la función fuimos a un restaurante llamado "Metro", ahí compramos unos frapes muy ricos, por cierto, pero ese día creo que llovió y yo tenía mucho frio, tengo que admitir que estaba muy bien el ambiente, pero como tenia frio no pude disfrutarlo bien.'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-09-30.jpg',
                        title:'El legendario buffet de carne asada',
                        date: 'Dia 30 de Septiembre del 2018',
                        content:'Yo ya había ido a ese buffet con un amigo, pero quería llevar a mi pareja ahí, una vez fuimos, pero estaba cerrado, este día si encontramos abierto y comimos muy bien y muy rico, actualmente ya no eh visto abierto ahí, pero ojalá y se vuelva a repetir la ocasión. <br/><br/><br/><br/><br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-10-20.jpg',
                        title:'El Symposium',
                        date: 'Dia 20 de Octubre del 2018',
                        content:'Recuerdo que tu me mencionabas mucho el symposium, y a mi me entraba la curiosidad y queria ir contigo al baile, yo no sabia que me ibas a invitar, pero al final me dijiste y yo pues bien motivado empece a conseguir saco y camisa para ir bien elegante al evento, incluso fui a cortarme el cabello, que por cierto me lo dejaron todo feo, pero al final el evento estuvo muy chido y me agrado convivir con tus amigos. <br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2018-11-24.jpg',
                        title:'Rincon Victoria',
                        date: 'Dia 24 de Noviembre del 2018',
                        content:'De tanto que ibamos a ritual, se nos ocurrio dar una vuelta a rincon victoria, bar que esta enfrente de ritual.<br/><br/> Te quedo muy bien el dibujo. <br/>'      
                    },

                    {
                        img: 'img/recuerdos/2019-01-09.jpg',
                        title:'Ritual, como siempre xD',
                        date: 'Dia 9 de Enero del 2019',
                        content:'Otra de muchas visitas a ritual, creo que será y seguirá siendo el bar favorito para nosotros, en ese entonces compramos unas margaritas muy ricas, obviamente nuestros aros de cebolla y nuestros nachos. <br/><br/><br/><br/><br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2019-01-28.jpg',
                        title:'6 meses formalemente xD',
                        date: 'Dia 28 de Enero del 2019',
                        content:'Ese dia cumplimos 6 meses de relacion, tu hermana me dijo que te haria mucha ilusion que te regalara un globo, me dijo que a ti no te importaria que fuera, mientras que incluyera un globo, asi que me decidi en ir por un bonito ramo de flores con globo incluido. <br/> <br/> No me acuerdo si te dije, pero cuando sali de la floreria se me revento el globo xD, asi que me enoje y fui a la floreria a que me dieran otro xDxD. <br/> <br/> Total, fuimos a ritual a pasar un buen rato juntos. <br/><br/><br/><br/>'      
                    },
            
                    {
                        img: 'img/recuerdos/2019-02-14.jpg',
                        title:'El Mejor Regalo Que Me Han Dado :)',
                        date: 'Dia 14 de Febrero del 2019',
                        content:'Llego el 14 de febrero y salimos ya no a ritual xD, sino que decidimos ir a cervecería Chapultepec, ese día no la pasamos muy bien, estuvimos tomando tequila (que ricooo), la comida estaba ñeee, pero hay que admitir que era un buen lugar para pasar un buen rato (ya no porque se cambiaron de lugar >:v), pero lo importante es que pasamos el 14 de febrero juntos, y que al final de la noche me sorprendiste con ese hermoso regalo, hecho completamente a mano por ti.<br/><br/> El mejor regalo que me ha dado alguien, tiene un valor sentimental muy grande para mí.'      
                    },
            
                    {
                        img: 'img/recuerdos/2019-03-28.jpg',
                        title:'Me encanta esa foto <3',
                        date: 'Dia 28 de Marzo del 2019',
                        content:'Ese día cumplimos 8 meses de relación, y como ya era costumbre fuimos a Ritual, esa blusa fue un regalo mío en tu cumpleaños, sabía que el color amarillo te quedaría muy bien, pero ese día que te vi con ella la verdad que me sorprendió, y esa foto es la clara imagen de que tengo a la novia mas hermosa del mundo<3.<br/><br/><br/>'      
                    },
            
        ];
        
         posts.forEach((item , index)=>{
            var post=`
                        <div class="post">
                             <h2>${item.title}</h2>
                             <img src="${item.img}"/>
                             <span class="date">${item.date}</span>
                             <p>
                                 ${item.content}
                             </p>
                         </div>`;
            
            $("#background_memories").append(post);
        });
        
        function Intervalo(){
        
        let banner=setInterval(function(){
            $("#banner").show("fade",2000);
        },0);
        
        let memories=setInterval(function(){
            $("#memories").show("fade",2000);
        },500);  
    
        let pie_de_pagina=setInterval(function(){
            $("#footer").show("fade",2000);
        },1000);
    }
    
    var tiempo=Intervalo();
        
        
        //Scroll Arriba De La Web
        var mensaje=`
                    <span class="mensaje">
                        ""Presiona La Paloma O El Corazon""
                    </span>
                    `;
        
            $('.subir').click(function(e){
            e.preventDefault();
                
                $("#mensaje").append(mensaje);

            $('html, body').animate({
               scrollTop: 0
            }, 500)
            });
                
        //Efectos Pantalla Emergente
        $("#mostrar").click(function(){
            
            $("#emergente").modal({
                fadeDuration: 1000,
                fadeDelay: 0.50
                
            });
            
        });
        
    }
    
});
