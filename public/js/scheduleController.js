app.controller('scheduleController', ['$scope', 
    function($scope) {
        $scope.days = ['一', '二', '三', '四', '五', '六', '日'];
        $scope.index = range(12, 1); 
    }]
);
