angular.module('starter.services', [])

.factory('Friends', function() {
  var friends = [{
    id: 0,
    name: 'James Rhymer',
    position: {lat:"30.43415",lon:"-84.29055"},
    face: 'https://pbs.twimg.com/profile_images/633585322442387456/CIXEIK-c_400x400.jpg'
  }, {
    id: 1,
    name: 'Lucas Lindsey',
    position: {lat:"30.43300",lon:"-84.28970"},
    face: 'https://pbs.twimg.com/profile_images/626544760220614656/11HnT_Gm_400x400.jpg'
  }];

  return {
    showFriend: -1,
    loggedIn: false,
    all: function() {
      return friends;
    },
    remove: function(friend) {
      chats.splice(chats.indexOf(chat), 1);
    },
    get: function(friendId) {
      for (var i = 0; i < friends.length; i++) {
        if (friends[i].id === parseInt(friendId)) {
          return friends[i];
        }
      }
      return null;
    }
  };
});
