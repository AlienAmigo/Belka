$(document).ready(function(){
// Switches
function Accordeon() {
	$(this).toggleClass('prices-accrod__item--active');
	$('.prices-accrod__item').not(this).removeClass('prices-accrod__item--active');
}
	$('.prices-accrod__item').on('click', Accordeon);

// Carousele	
	$('.traces__list').slick({
	dots: false,
	arrows: true,
  prevArrow: '.btn-prev1',
  nextArrow: '.btn-next1',
	infinite: true,
	mobileFirst: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	// responsive: [
	// 	{
	// 		breakpoint: 1280,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1,
	// 			infinite: true,
	// 			dots: false
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 320,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	}
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	// 	]
	});
	
	$('.photo__list').slick({
	dots: false,
	arrows: true,
  prevArrow: '.btn-prev2',
  nextArrow: '.btn-next2',
	infinite: true,
	mobileFirst: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	// responsive: [
	// 	{
	// 		breakpoint: 1280,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1,
	// 			infinite: true,
	// 			dots: false
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 320,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	}
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	// 	]
	});
	$('.reviews__list').slick({
	dots: false,
	arrows: true,
  prevArrow: '.btn-prev3',
  nextArrow: '.btn-next3',
	infinite: true,
	mobileFirst: true,
	speed: 300,
	slidesToShow: 1,
	slidesToScroll: 1,
	// responsive: [
	// 	{
	// 		breakpoint: 1280,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1,
	// 			infinite: true,
	// 			dots: false
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 768,
	// 		settings: {
	// 			slidesToShow: 3,
	// 			slidesToScroll: 1
	// 		}
	// 	},
	// 	{
	// 		breakpoint: 320,
	// 		settings: {
	// 			slidesToShow: 1,
	// 			slidesToScroll: 1
	// 		}
	// 	}
	// 	// You can unslick at a given breakpoint now by adding:
	// 	// settings: "unslick"
	// 	// instead of a settings object
	// 	]
	});
});