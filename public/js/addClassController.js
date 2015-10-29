app.controller('addClassController', ['$scope', '$mdDialog', '$cookies', 
    function($scope, $mdDialog, $cookies) {
        $scope.cancel = function() {
            $mdDialog.cancel();
        };
        $scope.hide = function() {
            $mdDialog.hide();
        };
        $scope.form = {
            classname: '',
            teacher: '',
            day: '',
            startime: '',
            endtime: '',
            address:'' 
        };
        $scope.days = ['一','二','三','四','五','六','日'].map(function(ele, index) {
            return {cn: ele, num: index};
        });
        $scope.classes = range(12, 1);
        $scope.commit = function() {

        };
    }
]);
