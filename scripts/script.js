var owl = $('.owl-carousel').owlCarousel({
    margin: 30,	
    loop: true,
    responsiveClass:true,
	navText : ["",""],
    dots: true,
    dotsEach: true,
    lazyLoad: true,
    responsiveRefreshRate: 50,
    responsive:{
        0:{
            dots: false,
        },
        850:{
            items:2,
        },
        1000:{
            items:3
        },
        1150:{
            items:4
        }
    }
});

$(".next-arrow").click(function(){
		owl.trigger("next.owl.carousel");
});
$(".prev-arrow").click(function(){
	owl.trigger("prev.owl.carousel");
});

