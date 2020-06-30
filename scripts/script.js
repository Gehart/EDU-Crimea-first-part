var owl = $('.owl-carousel').owlCarousel({
    margin: 30,
    loop: true,
    autoWidth:true,
    nav: true,    
	items: 4,
    dots: true,
});

$(".next-arrow").click(function(){
		owl.trigger("next.owl.carousel");
});
$(".prev-arrow").click(function(){
	owl.trigger("prev.owl.carousel");
});