'use strict';

module.exports = function($scope, $http) {
 

  var refresh = function () {
        $http.get('/theatre/getTheatre').success(function (response) {
            console.log(response);
            $scope.theatreList = response;
            console.log("theatreList");
            $scope.theatre = "";
        });
    };


    var refresh1 = function () {
        $http.get('/movie/getMovie').success(function (response) {
            console.log(response);
            $scope.movieList = response;
            console.log(movieList);
        });
    };

    

    $scope.addMapping = function () {
                          
                            $http.post('/mapping/addMapping', $scope.post).success(function (response) {
                                console.log(response);
                                console.log("CREATE IS SUCCESSFUL");
                                refresh();
                            });
                           
                        
        //console.log($scope.contact);
       
    };

    $scope.removeMapping = function (mapping) {
        //console.log(id);
        $http.delete('/mapping/deleteMapping/' + mapping._id).success(function (response) {
            console.log(response);
            console.log('DELETED SUCCESSFULLY');
            refresh();
        });
    };

    $scope.editMapping = function (movie) {
         $http.get('/mapping/getMapping/' + mapping._id).success(function (response) {
            $scope.mapping = response[0];
        });
    }; 

    $scope.updateMapping = function () {
        console.log("REACHED UPDATE");
        console.log($scope.mapping._id);
        $http.put('/mapping/updateMapping/' + $scope.mapping._id, $scope.mapping).success(function (response) {
            console.log(response);
            refresh();
        })
    }
};

