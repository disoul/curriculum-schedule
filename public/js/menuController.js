app.controller('menuController', ['$scope', '$cookies', '$mdDialog', '$templateCache',
    function($scope, $ngCookies, $mdDialog, $templateCache) {
        $scope.isOpen = false;
        $scope.showDialog = function(ev) {
            $mdDialog.show({
                controller: DialogController,
                templateUrl: $templateCache.get('addClass.html'),
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
