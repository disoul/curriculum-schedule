app.controller('addClassController', ['$scope', '$mdDialog', '$cookies', 
    function($scope, $mdDialog, $cookies) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        }
        $scope.hide = function() {
            $mdDialog.hide();
        }
    }
]);
