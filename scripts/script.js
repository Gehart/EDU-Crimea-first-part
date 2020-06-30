var owl = $('.owl-carousel').owlCarousel({
    margin: 30,
    // stagePadding: 14,	
    loop: true,
    responsiveClass:true,
	navText : ["",""],
    dots: true,
    dotsEach: true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        900:{
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