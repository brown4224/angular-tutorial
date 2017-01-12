/*
This creates a socket object that will be used by angularjs
Notes:
https://www.html5rocks.com/en/tutorials/frameworks/angular-websockets/
https://www.youtube.com/watch?v=kyPiJEVQ6cU
*/

// app.factory('socketIO', function ($rootScope) {
//   var socket = io.connect();
//   return {
//     on: function (eventName, callback) {
//       socket.on(eventName, function () {
//         var args = arguments;
//         $rootScope.$apply(function () {
//           callback.apply(socket, args);
//         });
//       });
//     },
//     emit: function (eventName, data, callback) {
//       socket.emit(eventName, data, function () {
//         var args = arguments;
//         $rootScope.$apply(function () {
//           if (callback) {
//             callback.apply(socket, args);
//           }
//         });
//       });
//     }
//   };
// });

// $(function(){
//    var $socket = io.connect();
//    $socket.emit('request-images');
// });
