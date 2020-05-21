function initMap() {
  var laner = {lat: 31.913620 , lng: -122.325767};
  var map = new google.maps.Map(
    document.getElementById('map'), {zoom: 8, center: laner});
  var marker = new google.maps.Marker({position: laner, map: map});
}
