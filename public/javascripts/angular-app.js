var myApp = angular.module('myApp',[]);

myApp.controller('peliCtrl', function ($scope, $http) {


     //This method will call your server, with the GET method and the url /show
     $http.get("../api/movieByGenre").then(function(peliculas){
        $scope.peliculas=peliculas.data;
    });
    
});
