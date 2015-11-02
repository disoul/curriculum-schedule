app.controller('scheduleController', ['$scope', '$cookies', '$cookiesParse',
    function($scope, $cookies, $cookiesParse) {
        $scope.days = ['一', '二', '三', '四', '五', '六', '日'];
        $scope.index = range(12, 1); 
        $scope.color = function(num) {
            if (num == 1) return '#F8F8F8';
            return COLORS[Math.floor(Math.random() * COLORS.length)];
        };
        $scope.getTile = updateTiles();

        $scope.$on('updateSchedule', function() {
            console.log('change');
            $scope.getTile = updateTiles();
        });
        function updateTiles() {
            console.log('update');
            var array = [];
            if ($cookies.get('schedule') === undefined)
               return []; 
            var schedule = $cookiesParse.parseSchedule($cookies.get('schedule'));
            console.log($cookies.get('schedule'));
            console.log(schedule);
            for (var i=0;i<12;i++) {
                for (var j=0;j<7;j++) {
                    if (schedule[i][j] === 0) {
                        array.push(1);
                    }else if((i>0) && (schedule[i-1][j] < schedule[i][j])) {
                        array.push(schedule[i][j]);
                    }
                    if ((i ===0) && (schedule[i][j] !== 0)) {
                        array.push(schedule[i][j]);
                    }
                }
            }
            console.log(array);
            return array;
        }

    }] 
);
