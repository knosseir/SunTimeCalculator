var myLat;
var myLon;
var map;

function getUserLocation(param) {
  var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    window.myLat = startPos.coords.latitude;
    window.myLon = startPos.coords.longitude;
    refresh(param);
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);
}

function initMap() {
  var westwood = {lat: 34.070, lng: -118.450};

  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 7,
    center: westwood,
    mapTypeId: 'terrain'
  });
}

function refresh(callback){
  addMarker({lat: window.myLat, lng: window.myLon});
  callback();
}
function addMarker(location) {
  var marker = new google.maps.Marker({
    position: location,
    map: map
  });
}
