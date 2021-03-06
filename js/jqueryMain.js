"use strict"

//pop up (слайдер)
$(document).ready(function() {
    $('.image-popup').magnificPopup({type:'image'});
});

//pop up (в начале)
let delay_popup = 20000; //время появления в милисек
setTimeout("document.getElementById('bg_popup').style.display='block'", delay_popup);

//маска на телефон
$(document).ready(function() {
    $("#phone_2").mask("+7(999) 999-9999");
    
    $('form').submit(function(event)/*событие*/{
        if ($("#phone_2").val()== "" || $("popup-mail").val()== ""){
        // если телефон = ничего или почта = ничего, то...
            event.preventDefault(); /*сброс события и не отправка на сервер*/
            alert("Некорректное заполнение полей!");
        }
    });
});

//отложенная анимация WOW
$(document).ready(function() {
    new WOW().init();
});

 //Анимация активных ссылок в меню 
 $(window).scroll(() => {
     let scrollDistance = $(window).scrollTop();


     $('.section').each((i, el) => {

         if ($(el).offset().top - $('nav').outerHeight() <= scrollDistance) {
             $('nav a').each((i, el) => {
                 if ($(el).hasClass('active')) {
                     $(el).removeClass('active');
                 }
             });

             $('nav li:eq(' + i + ')').find('a').addClass('active');
         }

     });
 });

/*
// перебор класса active в Navbar
$(document).ready(function(){

    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if($(el).offset().top - $("nav").outerHeight() <= scrollDistance){
                $("nav a").each((e, el) => {
                    if ($(el).hasClass("active")){
                        $(el).removeClass("active");
                    }
                });
                $('nav li:eq('+ i +')').find('a').addClass('active');
            }
        });
    });
});

$('a[href^="#"]').click(function(){
    let valHref = $(this).attr("href");
    $('html, body').animate({scrollTop: $(valHref).offset().top - 50 + "px"});
});

/*
//слайдер
$(function(){
    var tolerance = 100;
    var speed = 650;
    var interactiveElements = $('input, button, a');
    var itemsLength = $('.panel').length;
    var active = 1;
    for (i=1; i<=itemsLength; i++){
        var $layer = $(".panel:nth-child("+i+")");
        var bgImg = $layer.attr("img");
        $layer.css({
            "background": "url("+bgImg+") no-repeat center / cover"
        });
    };
    setTimeout(function() {
        $(".panel").css({
            "transition": "cubic-bezier(.4,.95,.5,1.5) "+speed+"ms"
        });
    }, 200);
    $(".panel:not(:first)").addClass("right");
    function swipeScreen() {
        $('.swipe').on('mousedown touchstart', function(e) {
            
            var touch = e.originalEvent.touches;
            var start = touch ? touch[0].pageX : e.pageX;
            var difference;
            $(this).on('mousemove touchmove', function(e) {
                var contact = e.originalEvent.touches,
                end = contact ? contact[0].pageX : e.pageX;
                difference = end-start;
            });
            $(window).one('mouseup touchend', function(e) {
                e.preventDefault();
                // Переход вправо:
                if (active < itemsLength && difference < -tolerance) {
                    $(".panel:nth-child("+active+")").addClass("left");
                    $(".panel:nth-child("+(active+1)+")").removeClass("right");
                    active += 1;
                    btnDisable();
                };
                // Переход влево:
                if (active > 1 && difference > tolerance) {
                    $(".panel:nth-child("+(active-1)+")").removeClass("left");
                    $(".panel:nth-child("+active+")").addClass("right");
                    active -= 1;
                    btnDisable();
                };
                $('.swipe').off('mousemove touchmove');
            });
        });
    };
    swipeScreen();
    interactiveElements.on('touchstart touchend touchup', function(e) {
        e.stopPropagation();
    });
    // Кнопки:
    $(".btn-prev").click(function(){
        // Переход влево:
        if (active > 1) {
            $(".panel:nth-child("+(active-1)+")").removeClass("left");
            $(".panel:nth-child("+active+")").addClass("right");
            active -= 1;
            btnDisable();
        };
    });
    $(".btn-next").click(function(){
        // Переход вправо:
        if (active < itemsLength) {
            $(".panel:nth-child("+active+")").addClass("left");
            $(".panel:nth-child("+(active+1)+")").removeClass("right");
            active += 1;
            btnDisable();
        };
    });
    function btnDisable() {
        if (active >= itemsLength) {
            $(".btn-next").prop("disabled", true);
            $(".btn-prev").prop("disabled", false);
        }
        else if (active <= 1) {
            $(".btn-prev").prop("disabled", true);
            $(".btn-next").prop("disabled", false);
        }
        else {
            $(".btn-prev, .btn-next").prop("disabled", false);
        };
    };
});
*/