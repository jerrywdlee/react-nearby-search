/* eslint-disable */
var map;
var infowindow;
var service;
var centerPoint;
var markerGroup = [];

function initMap(element, initPoint = {lat: 35.7021342, lng: 139.7586458}, zoom = 15) {
  centerPoint = initPoint
  map = new google.maps.Map(element, {
    center: centerPoint,
    zoom: zoom
  });
  // init infowindow once
  infowindow = new google.maps.InfoWindow();
  // init service once
  service = new google.maps.places.PlacesService(map);
}

function nearbySearch(types=[],placeRadius = 500) {
  if (map && centerPoint) {
    // var service = new google.maps.places.PlacesService(map);
    service.nearbySearch({
      location: centerPoint,
      radius: placeRadius,
      types: types
    }, markNearbyPlaces);
  }
}

function markNearbyPlaces(results, status) {
  markerGroup.forEach((marker, i) => {marker.setMap(null)})// 古いマーカーの削除
  if (status === google.maps.places.PlacesServiceStatus.OK) {
    for (let i = 0; i < results.length; i++) {
      createMarker(results[i]);
    }
  }
}

function createMarker(place, ifInitPoint) {
  let placeLoc = place.geometry.location;
  let marker = new google.maps.Marker({
    map: map,
    position: place.geometry.location,
  });

  if (place.icon) {
    let myIcon = new google.maps.MarkerImage(place.icon, null, null, null, new google.maps.Size(19,28));
    // 画像サイズ指定：http://qiita.com/tsukaguitar/items/0f0a483ab4ec32382800
    marker.setOptions({
      icon: myIcon
    });
  }

  google.maps.event.addListener(marker, 'click', function() {
    // infowindow.setContent(place.name + '<br>' +place.place_id);
    if (!place.name) {
      // console.log(place.address_components[0].short_name);
      place.name = place.address_components[0].short_name
    }
    let mapUrl = `https://maps.google.com/maps?q=${place.name}&ll=${place.geometry.location.lat()},${place.geometry.location.lng()}&z=17&hl=ja`
    // リファレンス：http://webapps.stackexchange.com/questions/4438/create-a-google-maps-link-to-a-specific-location
    infowindow.setContent(`<a href="${mapUrl}" target="_blank">${place.name}</a>`);
    infowindow.open(map, this);
    // console.log(place.geometry)
  });
  if (!ifInitPoint) {
    markerGroup.push(marker) // 削除するために記録、initPoint削除しない
  }
}

function getAreaName(latLngNow, cb){
// 座標から住所名を取得
  let geocoder = new google.maps.Geocoder();
  geocoder.geocode({latLng: latLngNow}, function(results, status){
    if(status == google.maps.GeocoderStatus.OK){
      // console.log(results[0]);
      createMarker(results[0],true) // initPointのマーク
      if (cb) {
        cb(results[0])
      }
      // results[0].formatted_address
    }
  });
}

export { initMap, getAreaName, nearbySearch }
