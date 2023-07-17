ymaps.ready(init);

function init() {
  var myMap = new ymaps.Map("map", {
    center: [51.089974, 71.421671], // Широта и долгота центра карты
    zoom: 17
  });

  var myPlacemark = new ymaps.Placemark([51.089974, 71.421671], {
    hintContent: 'Место на карте',
    balloonContent: 'Информация о месте'
  });

  myMap.geoObjects.add(myPlacemark);
}

const checkMenu = document.getElementById('check-menu');
const headerInfo = document.querySelector('.header__info');

checkMenu.addEventListener('change', function() {
  if (window.innerWidth <= 670) {
    if (this.checked) {
      headerInfo.style.marginTop = '150px';
    } else {
      headerInfo.style.marginTop = '0';
    }
  }
});


$(document).ready(function() {
  $('.owl-carousel').owlCarousel({
    loop: false,
    margin: 40,
    mergeFit: true,
    startPosition: 0,
    items: 3,
    nav: false,
    dots: false,
    autoWidth: false,
    startPosition: 0,
    responsive: {
      0: {
        items: 1
      },
      970: {
        items: 2
      },
      1050: {
        items: 3
      }
    }
  });

  $('.owl-prev').click(function() {
    $('.owl-carousel').trigger('prev.owl.carousel');
  });

  $('.owl-next').click(function() {
    $('.owl-carousel').trigger('next.owl.carousel');
  });
});


