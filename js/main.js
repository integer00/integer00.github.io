var feature = document.querySelector("#js-feature-offer");
var feature_heading = document.getElementById("js-feature-heading");

var slider = document.querySelector("#js-slider");
var slider_button_1 = document.querySelector("#js-button-1");
var slider_button_2 = document.querySelector("#js-button-2");
var slider_button_3 = document.querySelector("#js-button-3");

var feedback = document.querySelector("#js-feedback");
var modal = document.querySelector("#js-modal");
var modal_close = document.querySelector("#js-modal__close")
var overlay = document.querySelector("#js-overlay");



slider.style.visibility="visible";
feedback.style.visibility="visible";

slider_button_1.addEventListener("click", function(event){
  document.body.classList.add("slider1");
  document.body.classList.remove("slider2");
  document.body.classList.remove("slider3");
  feature.style.background = "url(img/morojenko.png) no-repeat top";
  feature_heading.innerHTML = "Крем-брюле и пломбир с малиновым джемом";

});
slider_button_2.addEventListener("click", function(event){
  document.body.classList.add("slider2");
  document.body.classList.remove("slider1");
  document.body.classList.remove("slider3");
  feature.style.background = "url(img/morojenko-2.png) no-repeat top";
  feature_heading.innerHTML = "Шоколадный пломбир и лимонный сорбет";

  
});
slider_button_3.addEventListener("click", function(event){
  document.body.classList.add("slider3");
  document.body.classList.remove("slider1");
  document.body.classList.remove("slider2");
  feature.style.background = "url(img/morojenko-3.png) no-repeat top";
  feature_heading.innerHTML = "Пломбир с помадкой и клубничный щербет";
  
});

feedback.addEventListener("click", function(event){
  event.preventDefault();
  overlay.classList.add("modal-overlay--show");
  modal.classList.add("modal-feedback--show");

});

modal_close.addEventListener("click", function() {
  event.preventDefault();
  overlay.classList.remove("modal-overlay--show");
  modal.classList.remove("modal-feedback--show");

});

    window.addEventListener("keydown", function(){
      if (event.keyCode === 27) {
        if (overlay.classList.contains("modal-overlay--show")){
              modal.classList.remove("modal-feedback--show");
              overlay.classList.remove("modal-overlay--show");
            }
          }
        });

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