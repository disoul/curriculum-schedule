app.controller('scheduleController', ['$scope', 
    function($scope) {
        $scope.days = ['一', '二', '三', '四', '五', '六', '日'];
        $scope.index = range(12, 1); 
        $scope.color = function(num) {
            if (num == 1) return '#F8F8F8';
            return COLORS[Math.floor(Math.random() * COLORS.length)];
        };
        $scope.getTile = (function() {
            var array = [];
            for (var i=0;i<12;i++) {
                for (var j=0;j<7;j++) {
                    if (test[i][j] === 0) {
                        array.push(1);
                    }else if((i>0) && (test[i-1][j] < test[i][j])) {
                        array.push(test[i][j]);
                    }
                    if ((i ===0) && (test[i][j] !== 0)) {
                        array.push(test[i][j]);
                    }
                }
            }
            console.log(array);
            return array;
        })();
    }] 
);
