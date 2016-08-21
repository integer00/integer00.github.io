ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
               center: [59.938429885190054, 30.32991749740603],
           zoom: [16],
        }, {
            searchControlProvider: 'yandex#search'
        }),
myPlacemark = new ymaps.Placemark([59.93866675783276, 30.32307250000002], {
            hintContent: "Gllacy Shop"
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/pin.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            iconImageOffset: [-38, -125]
        });

    myMap.geoObjects.add(myPlacemark);
});





$(document).ready(function() {
   $(".page-feature__buttons-carousel").css("visibility","visible");
   $(".text-feedback__button").css("visibility","visible");

   	$(".carousel__btn-1").click(function() {
   		
 		$("body").removeClass('slider2 slider3 slider2-offer slider3-offer');
 		$("body").addClass('slider1');
 	 	$(".page-feature-offer").removeClass('slider2-offer slider3-offer');
 		$(".page-feature-offer").addClass('slider1-offer');
 		$(".page-feature__heading").text("Крем-брюле и пломбир с малиновым джемом");

 		});






 		$(".carousel__btn-2").click(function() {
   		
 		$("body").removeClass('slider1 slider3 slider1-offer slider3-offer');
 		$("body").addClass('slider2');
		$(".page-feature-offer").removeClass('slider1-offer slider3-offer');
 		$(".page-feature-offer").addClass('slider2-offer');
 		$(".page-feature__heading").text("Шоколадный пломбир и лимонный сорбет ");


 		});

 		$(".carousel__btn-3").click(function() {
   		
 		$("body").removeClass('slider1 slider2');
 		$("body").addClass('slider3');
 		$(".page-feature-offer").removeClass('slider1-offer slider2-offer');
 		$(".page-feature-offer").addClass('slider3-offer')
 		$(".page-feature__heading").text("Пломбир с помадкой и клубничный щербет");
 		});

 		$(".text-feedback__button").click(function() {


 			$(".modal-overlay").addClass('modal-overlay--show');
 			$(".modal-feedback").addClass('modal-feedback--show');


 		});

 		$(".modal__close").click(function() {
 			$(".modal-feedback").removeClass('modal-feedback--show');
 			$(".modal-overlay").removeClass('modal-overlay--show');


 		});
		


      
 		$(window).keydown(function() {

 			  if (event.keyCode === 27)  {
 			  	if ($(".modal-feedback").hasClass('modal-feedback--show')) {
 		 			  $(".modal-feedback").removeClass('modal-feedback--show');
 			 			 $(".modal-overlay").removeClass('modal-overlay--show');
					}
 			  }
 			});



	});