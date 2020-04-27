$(function(){
	$('.slider').slick({
		nextArrow: '<button class="slick-arrow slick-next"><img src="images/prev.svg" alt="prev arrow"></button>',
		prevArrow: '<button class="slick-arrow slick-prev"><img src="images/next.svg" alt="next arrow"></button>',
		fade: true,
		autoplay: 2000,
		responsive: [
		{
			breakpoint: 441,
			settings:{
				arrows: false
			}
		}
		]
	});

	
});