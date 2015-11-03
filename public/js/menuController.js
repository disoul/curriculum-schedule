app.controller('menuController', ['$scope', '$mdDialog', '$templateCache',
    function($scope, $mdDialog, $templateCache) {
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
