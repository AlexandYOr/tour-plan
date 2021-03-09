ymaps.ready(init);
function init(){
  var myMap = new ymaps.Map('map', {
    center: [57.171588, 32.986161],
    zoom: 17
});
var myPlacemark = new ymaps.Placemark(
[57.171401, 32.985860] , {
    hintContent: ':D'
});

myMap.geoObjects.add(myPlacemark);


}
