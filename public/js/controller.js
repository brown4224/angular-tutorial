var app = angular.module('myApp', [ 'socket.io' ]);

// app.config(['$socketProvider',function ($socketProvider) {
//     $socketProvider.setConnectionUrl('http://localhost:3000');
//     // $socketProvider.setConnectionUrl('http://localhost:3000');
//     // $socketProvider.setConnectionUrl();
// }]);

app.controller('Ctrl', ['$scope', '$socket' ,function Ctrl($scope, $socket) {
    console.log($socket);
    $socket.on('echo', function (data) {
        $scope.serverResponse = data;
        console.log('Recieved');
    });

    $scope.emitBasic = function emitBasic() {
        console.log($socket);
        console.log('echo event emited');
        $socket.emit('echo', $scope.dataToSend);
        $scope.dataToSend = '';
    };

    $scope.emitACK = function emitACK() {
        $socket.emit('echo-ack', $scope.dataToSend, function (data) {
            //se nao tivesse sido feito $apply
            //a variavel $scope não seria reconhecida
            $scope.serverResponseACK = data;
        });
        $scope.dataToSend = '';
    };
}]);



// var module = angular.module('socket.io', []);
//
//
// module.provider('$socket', function $socketProvider($socket){
//     var ioUrl = '';
//     var ioConfig = {};
//     this.setConnectionUrl = function setConnectionUrl(url) {
//         if (typeof url == 'string') {
//             ioUrl = url;
//         } else {
//             throw new TypeError('url must be of type string');
//         }
//     };
//     this.$get = function $socketFactory($rootScope) {
//         var socket = io(ioUrl, ioConfig);
//         return {
//
//             on: function on(event, callback) {
//                 on: function on(event, callback) {
//                     var args = arguments;
//                     $rootScope.$apply(function () {
//                         callback.apply(socket, args);
//                     });
//                 };
//             },
//             off: function off(event, callback) {
//                 if (typeof callback == 'function') {
//                     socket.removeListener(event, callback);
//                 } else {
//                     socket.removeAllListeners(event);
//                 }
//             },
//             emit: function emit(event, data, callback) {
//                 if (typeof callback == 'function') {
//                     socket.emit(event, data, function () {
//                         var args = arguments;
//
//                         $rootScope.$apply(function () {
//                             callback.apply(socket, args);
//                         });
//                     });
//                 } else {
//                     socket.emit(event, data);
//                 }
//             }
//
//         };
//     };
//
//
// });
//
// // module.factory('$socket', $socketFactory(){
// //     var ioUrl = 'localhost:3000';
// //     var ioConfig = {};
// //     this.$get = function $socketFactory($rootScope) {
// //         var socket = io(ioUrl, ioConfig);
// //         return {
// //
// //             on: function on(event, callback) {
// //                 on: function on(event, callback) {
// //                     var args = arguments;
// //                     $rootScope.$apply(function () {
// //                         callback.apply(socket, args);
// //                     });
// //                 };
// //             },
// //             off: function off(event, callback) {
// //                 if (typeof callback == 'function') {
// //                     socket.removeListener(event, callback);
// //                 } else {
// //                     socket.removeAllListeners(event);
// //                 }
// //             },
// //             emit: function emit(event, data, callback) {
// //                 if (typeof callback == 'function') {
// //                     socket.emit(event, data, function () {
// //                         var args = arguments;
// //
// //                         $rootScope.$apply(function () {
// //                             callback.apply(socket, args);
// //                         });
// //                     });
// //                 } else {
// //                     socket.emit(event, data);
// //                 }
// //             }
// //
// //         };
// //     };
// // });
//
// var app = angular.module('example', ['socket.io']);
// app.config(function ($socketProvider) {
//     $socketProvider.setConnectionUrl('http://localhost:3000');
// });
//
// app.controller('Ctrl', function Ctrl($scope, $socket) {
//     $socket.on('echo', function (data) {
//         $scope.serverResponse = data;
//     });
//     $scope.emitBasic = function emitBasic() {
//         $socket.emit('echo', $scope.dataToSend);
//         $scope.dataToSend = '';
//     };
//
//     $scope.emitACK = function emitACK() {
//         $socket.emit('echo-ack', $scope.dataToSend, function (data) {
//             $scope.serverResponseACK = data;
//         });
//         $scope.dataToSend = '';
//     };
// });
//
