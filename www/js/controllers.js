angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope, $ionicLoading, Friends, $stateParams) {

  $scope.findFriend= function(id) {
    $scope.friend = Friends.get(id);
    console.log($scope.friend)
    pos = $scope.friend.position
    var latlng = new google.maps.LatLng(pos.lat,pos.lon);
    var marker = new google.maps.Marker({
          animation: google.maps.Animation.BOUNCE,
          position: latlng,
          map: $scope.map
    });
  };

  $scope.positions = [{
      lat: 30.4550,
      lng: -84.2533
    }];

    $scope.$on('mapInitialized', function(event, map) {
      $scope.map = map;
      $scope.centerOnMe()

      if(parseInt($stateParams.friendId).toString() != "NaN") {
        console.log("hi",$stateParams.friendId, "hi")
        $scope.friend = Friends.get($stateParams.friendId);
        $scope.findFriend($stateParams.friendId)
      }

    });



    $scope.centerOnMe= function(){

      $ionicLoading.show({
        template: 'Loading...'
      });


      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
        $scope.positions.push({lat: pos.G,lng: pos.B});
        $scope.map.setCenter(pos);
        $scope.map.setZoom(18);
        var marker = new google.maps.Marker({
              position: pos,
              map: $scope.map
        });

        $ionicLoading.hide();
      }, function(error) {
        alert("We can't find you")
        $ionicLoading.hide();
      });

    };

})

.controller('ChatsCtrl', function($scope, Friends, $location) {
  console.log("friends")

  $scope.fbLogin = function () {
      Friends.loggedIn = true;
      $scope.loggedIn = true;
    };

  $scope.friends = Friends.all();
  $scope.remove = function(friend) {
    Friends.remove(chat);
  };
})
