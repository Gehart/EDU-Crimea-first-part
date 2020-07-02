// настройки owl-carousel
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
            items: 1,
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

// для тестирования размеров окна
window.addEventListener('resize', showSize);
function showSize(){
  if(window.innerWidth !== undefined && window.innerHeight !== undefined) { 
    var w = window.innerWidth;
    var h = window.innerHeight;
  } else {  
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
  }
  var txt = "Page size: width=" + w + ", height=" + h;
  console.log(txt);
}

// свойста header при скролле
window.addEventListener("scroll", function() {
  let header = document.querySelector(".header");

  if (window.pageYOffset > 0) {
    header.classList.add("header-opacity");

    // отменяем изменения при наведении
    header.addEventListener("mouseover", function() {
        header.classList.remove("header-opacity");
    });
    header.addEventListener("mouseout", function() {
        header.classList.add("header-opacity");
    });
  } 
  else {
    header.classList.remove("header-opacity");
  }
});

// плавный переход по якорям
const anchors = document.querySelectorAll('a[href*="#"]');
const headerOffset = 60;
for (let anchor of anchors) {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    
    // узнаем позицию элемента
    var elementPosition = document.getElementById(anchor.getAttribute('href').substr(1)).getBoundingClientRect().top;
    // узнаем значения, нужное для смещения
    var offsetPosition = elementPosition - headerOffset + window.pageYOffset;
    // прокручиваем до элемента
    window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
    });
  })
}


