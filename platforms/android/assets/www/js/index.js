/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    map : {},
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
      navigator.geolocation.getCurrentPosition(app.onSuccess, app.onError, {timeout: 10000, enableHighAccuracy: true});
    },
    onSuccess: function(position) {
      app.lng = position.coords.longitude;
      app.lat = position.coords.latitude;
      var latlng = new google.maps.LatLng(app.lat,app.lng);
      var mapOpt = {
        center:latlng,
        zoom: 18,
        mapTypeId: google.maps.MapTypeId.ROADMAP
      }
      app.map = new google.maps.Map(document.getElementById("app"), mapOpt)
      var marker = new google.maps.Marker({
            position: latlng,
            map: app.map
      });
    },
    onError: function(error) {
      document.getElementById("app").innerHTML=error.message
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    },
    findFriend: function(id) {
      alert(this)
      var latlng = new google.maps.LatLng(app.lat+0.0001,app.lng+0.0001);
      alert(app.lat,app.lng)
      var marker = new google.maps.Marker({
            animation: google.maps.Animation.BOUNCE,
            position: latlng,
            map: app.map
      });
    }
};
