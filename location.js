function getUserLocation() {
var startPos;
  var geoSuccess = function(position) {
    startPos = position;
    document.getElementById('startLat').innerHTML = startPos.coords.latitude;
    document.getElementById('startLon').innerHTML = startPos.coords.longitude;
    var lat = startPos.coords.latitude;
    var lon = startPos.coords.longitude;
  };
  navigator.geolocation.getCurrentPosition(geoSuccess);

}

function initMap() {
          var uluru = {lat: -25.363, lng: 131.044};
          var map = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: uluru
          });
          var marker = new google.maps.Marker({
            position: {lat: lat, lon: lon},
            map: map
          });
        }
