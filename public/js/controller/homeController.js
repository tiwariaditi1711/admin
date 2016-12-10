'use strict';

module.exports = function($scope, $http) {
  $scope.home = 'home';
 
 var refresh = function () {
        $http.get('/movie/getMovie').success(function (response) {
            console.log(response);
            $scope.movieList = response;
            
        });
    };

    refresh();


    var refresh1 = function () {
        $http.get('/theatre/getTheatre').success(function (response) {
            console.log(response);
            $scope.theatreList = response;
            $scope.theatre = "";
        });
    };

    refresh1();



};

