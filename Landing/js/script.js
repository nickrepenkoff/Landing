function ibg(){
	$.each($('.ibg'), function(index, val){
		if($(this).find('img').length>0){
			$(this).css('background-image', 'url("'+$(this).find('img').attr('src')+'")');
		}
	});
}
ibg();



// $('.lang-switcher').click(function(){
// 	$('.sub-menu').toggleClass('active');
// 	$('.swith-icon').toggleClass('active')

// })

$(document).ready(function(){
	$('.banner').slick({
	infinite: true,
	slidesToShow: 1,
	slidesToScroll: 1,
	dots: true,
	swipe: true,
	draggale: true
  });
});



// function initMenu(){

// 	var linksList = document.getElementsByClassName("nav__list")[0];
// 	var links = linksList.getElementsByClassName("link-style");
// 	// console.log(links)
// 	// debugger

// 	for (var i = 0; i < links.length; i++) {
// 	  links[i].addEventListener("click", function() {
// 		  var current = document.getElementsByClassName("active");
// 		  if (current.length > 0) { 
// 		    current[0].className = current[0].className.replace(" active", "");
// 	  }
// 	  this.className += " active";
// 	  });
// 	}
// }
// initMenu();


// $(".tab__link").click(function(e) {
// 	e.preventDefault();
// 	$(".tab__content").removeClass("active").eq($(this).index()).addClass("active");
// }).eq(0).addClass("active");