var slider1_heading = "Долго, дорого, скрупулезно.";
var slider1_paragraph = "Математически выверенный дизайн \nдля вашего сайта или мобильного приложения.";
var slider2_heading = "Любите ли вы математику, как любим ее мы?";
var slider2_paragraph = "Нашим дизайнерам мы удаляем нейроны, ответственные \nза креатив, чтобы дать им возможность все просчитать";
var slider3_heading = "Только наркотики,\nтолько хардкор!";
var slider3_paragraph = "Все дизайнерские решения в нашей компании принимаются только под воздействием качественных галлюциногенов";

$(document).ready(function(){
	
 		$(window).keydown(function() {

 			  if (event.keyCode === 27)  {
 			  	if ($(".modal-write-us--show").hasClass('modal-write-us--show')) {
 		 			  $(".modal-write-us").removeClass('modal-write-us--show');
					}
 			  }
 			});

$("#radio1").click(function(){
		$("#js-slider__img").attr({width: "338", height: "231", src: "img/slider1.png"});
				$("#js-slider__header").text(slider1_heading);
					$("#js-slider__paragraph").text(slider1_paragraph);
						});
$("#radio2").click(function(){
		$("#js-slider__img").attr({width: "230", height: "249", src: "img/slider2.png"});
			$("#js-slider__header").text(slider2_heading);
  			$("#js-slider__paragraph").text(slider2_paragraph);
});
$("#radio3").click(function(){
		$("#js-slider__img").attr({width: "330", height: "319", src: "img/slider3.png"});
			$("#js-slider__header").text(slider3_heading);
  			$("#js-slider__paragraph").text(slider3_paragraph);
});




$("#js-modal-write-us__button").click(function(){
	if ($(".modal-write-us").hasClass("modal-write-us--show")) {
		$(".modal-write-us").removeClass('modal-write-us--show');
	} 

	else { $(".modal-write-us").addClass('modal-write-us--show'); 
					$("#js-modal-write-us__button--close").click(function(){
						$(".modal-write-us").removeClass('modal-write-us--show');
						});
				};

});

				function init_map() {
				    var myOptions = {
				        zoom: 17,
				        center: new google.maps.LatLng(59.93893930687581, 30.320722956066923),
				        mapTypeId: google.maps.MapTypeId.ROADMAP
				    };

				    map = new google.maps.Map(document.getElementById('js-google-map'), myOptions);

				    marker = new google.maps.Marker({
				        map: map,
				        position: new google.maps.LatLng(59.938507, 30.323233),
				        icon: 'img/pin.png'
				    });

				    infowindow = new google.maps.InfoWindow({
				    	content: "191186, Санкт-Петербург, ул. Б. Конюшенная, д. 19/8"
				    });

				    google.maps.event.addListener(marker, 'click', function() {
				        infowindow.open(map, marker);
				    });
				}
				google.maps.event.addDomListener(window, 'load', init_map); 



});