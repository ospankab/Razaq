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
