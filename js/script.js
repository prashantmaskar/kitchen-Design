/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
          /*----------------------------------------------------*/
            /*  Portfolio Isotope
             /*----------------------------------------------------*/
            $(document).ready(function($) {
                jQuery(window).load(function() {

                    var $container = $('#portfolio');
                    $container.isotope({
                        layoutMode: 'masonry',
                        filter: '.term-0',
                        animationOptions: {
                            duration: 750,
                            easing: 'linear',
                            queue: false,
                        }
                    });
                    $('.portfolio-filter ul a').click(function() {
                        var selector = $(this).attr('data-filter');
                        $container.isotope({
                            filter: ".term-0",
                            animationOptions: {
                                duration: 750,
                                easing: 'linear',
                                queue: false,
                            }
                        });
                        return false;
                    });
                    var $optionSets = $('.portfolio-filter ul'),
                            $optionLinks = $optionSets.find('a');
                    $optionLinks.click(function() {
                        var $this = $(this);
                        if ($this.hasClass('selected')) {
                            return false;
                        }
                        var $optionSet = $this.parents('.portfolio-filter ul');
                        $optionSet.find('.selected').removeClass('selected');
                        $this.addClass('selected');
                    });
                });
                if ((typeof $.fn.isotope !== 'undefined') && (typeof $.fn.imagesLoaded !== 'undefined') && ($('.portfolio-isotope').length > 0)) {

// initialize isotope after images are loaded

                    $('.portfolio-isotope').imagesLoaded(function() {

                        var container = $('.portfolio-isotope');
                        container.isotope({
                            itemSelector: '.item',
                            filter: ".term-0",
                            layoutMode: 'masonry',
                            transitionDuration: '0.5s'
                        });
                        $('.portfolio-filter li a').click(function() {
                            $('.portfolio-filter li a').removeClass('active');
                            $(this).addClass('active');
                            var selector = $(this).attr('data-filter');
                            container.isotope({
                                filter: selector
                            });
                            return false;
                        });
                        $(window).resize(function() {

                            container.isotope({});
                        });
                    });
                }
                // BACKGROUND VIDEO SCRIPTS
                $(function() {
                    $(".player").mb_YTPlayer(); // .player - class to add for playing video ( see the div above to understand)
                });

                /*----------------------------------------------------*/
                /*  Sticky Header
                 /*----------------------------------------------------*/

                (function() {

                    var docElem = document.documentElement,
                            didScroll = false,
                            changeHeaderOn = 100;
                    document.querySelector('header');

                    function init() {
                        window.addEventListener('scroll', function() {
                            if (!didScroll) {
                                didScroll = true;
                                setTimeout(scrollPage, 250);
                            }
                        }, false);
                    }

                    function scrollPage() {
                        var sy = scrollY();
                        if (sy >= changeHeaderOn) {
                            $(".top-bar").addClass("bg-black");
                            $("header").addClass("fixed-headers");
                            $(".navbar").addClass("bg_green");
                            $('.navbar-brand').css({'padding-top': 15 + "px", 'padding-bottom': 15 + "px"});
                            $('.c_logo').css({'width': 140 + "px", 'height': 40 + "px"});

                            if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
                                $('.navbar-default .navbar-nav > li > a').css({'padding-top': 0 + "px", 'padding-bottom': 0 + "px"})
                            } else {
                                $('.navbar-default .navbar-nav > li > a').css({'padding-top': 20 + "px", 'padding-bottom': 20 + "px"})
                                $('.search-side').css({'margin-top': -7 + "px"});
                            }
                            ;

                        }
                        else {
                            $(".top-bar").removeClass("bg-black");
                            $("header").removeClass("fixed-headers");
                            $(".navbar").removeClass("bg_green");
                            $('.navbar-brand').css({'padding-top': 27 + "px", 'padding-bottom': 27 + "px"});
                            $('.c_logo').css({'width': 150 + "px", 'height': 50 + "px"});

                            if (/iPhone|iPod|BlackBerry/i.test(navigator.userAgent) || $(window).width() < 479) {
                                $('.navbar-default .navbar-nav > li > a').css({'padding-top': 0 + "px", 'padding-bottom': 0 + "px"})
                            } else {
                                $('.navbar-default .navbar-nav > li > a').css({'padding-top': 28 + "px", 'padding-bottom': 28 + "px"})
                                $('.search-side').css({'margin-top': 0 + "px"});
                            }
                            ;

                        }
                        didScroll = false;
                    }

                    function scrollY() {
                        return window.pageYOffset || docElem.scrollTop;
                    }

                    init();



                })();

$('.design_slide').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:3
        },
        1000:{
            items:3
        }
    }
})
            });


