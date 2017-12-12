/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(window).load(function() {
    $('.pop').modal('show');


});
$(document).ready(function() {
$(".agree-btn").click(function(){
    window.location="home.php";
    
});
    ////------- Projects Carousel
    $("#testo-slide").owlCarousel({
        navigation: false,
        pagination: true,
        slideSpeed: 400,
        stopOnHover: true,
        autoPlay: 3000,
        items: 1,
        itemsDesktopSmall: [900, 1],
        itemsTablet: [600, 1],
        itemsMobile: [479, 1]
    });
});