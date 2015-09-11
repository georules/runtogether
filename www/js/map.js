var mapview = {
    map : {},
    // Application Constructor
    initialize: function() {
      ionic.Platform.ready(function(){
        navigator.geolocation.getCurrentPosition(mapview.onSuccess, mapview.onError, {timeout: 10000, enableHighAccuracy: true});
      })
        //this.bindEvents();
    },
    onSuccess: function(position) {

      mapview.lng = position.coords.longitude;
      mapview.lat = position.coords.latitude;
      var latlng = new google.maps.LatLng(mapview.lat,mapview.lng);
      var mapOpt = {
        center:latlng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      mapview.map = new google.maps.Map(document.getElementById("mapapp"), mapOpt)
      var marker = new google.maps.Marker({
            position: latlng,
            map: mapview.map
      });

        alert("positioning")
    },
    onError: function(error) {
      document.getElementById("mapapp").innerHTML=error.message
    },
    findFriend: function(id) {
      var latlng = new google.maps.LatLng(mapview.lat+0.0005,mapview.lng+0.0005);
      var marker = new google.maps.Marker({
            animation: google.maps.Animation.BOUNCE,
            position: latlng,
            map: mapview.map
      });
    }
};
