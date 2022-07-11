$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:0,
        nav:false,
        dots:true,
        pause: 'false',
        navText: [ '', ' ' ],
        autoplay: false,
        autoplayTimeout: 5000,
        autoplaySpeed: 1500,
        autoplayHoverPause: 0,
        navSpeed: 3000,
        responsive:{
             0:{
                items:1
            }
        }
    });
});