app.controller('menuController', ['$scope', '$cookies', '$mdDialog',
    function($scope, $ngCookies, $mdDialog) {
        $scope.isOpen = false;
        $scope.showDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: 'addClass.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsidetoClose: true
            }).then(function(answer) {
                //pass
            }, function() {
                //cancelled
            });
        };

        function DialogController($scope, $mdDialog) {
            
        }
    }
]);
