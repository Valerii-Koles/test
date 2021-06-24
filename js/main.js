$(document).ready(function(){
  $('.slider_main').slick({
  	arrows: false,
  	dots: true,
  });
$('.photo_slider').slick({
  slidesToShow: 5,
   centerMode: true,
 
});
$('.works_photo').slick({
	responsive: [
	{
		breakpoint: 100000,
		settings: 'unslick'
	},
	{
		breakpoint: 992,
		settings: {
			slidesToShow: 2,
			slidesToScroll: 1,
			arrows: false,
			dots: true
	},
	}
	]
 
});
});

    const iconMenu = document.querySelector('.menu_icon');
  if(iconMenu){
    const ourMenu = document.querySelector('.menu');
    iconMenu.addEventListener("click", function(e) {
      iconMenu.classList.toggle("animate");
      ourMenu.classList.toggle("open");
    });

  }


  