app.controller('menuController', ['$scope', '$cookies', '$mdDialog', '$templateCache',
    function($scope, $ngCookies, $mdDialog, $templateCache) {
        $scope.isOpen = false;
        $scope.showDialog = function(ev) {
            $mdDialog.show({
                templateUrl: 'addclass.html',
                parent: angular.element(document.body),
                targetEvent: ev,
                clickOutsidetoClose: true
            }).then(function(answer) {
                //pass
            }, function() {
                //cancelled
            });
        };
    }
]);
