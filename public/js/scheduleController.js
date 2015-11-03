app.controller('scheduleController', ['$scope', 'localStorageService',
    function($scope, localStorageService) {
        $scope.days = ['一', '二', '三', '四', '五', '六', '日'];
        $scope.index = range(12, 1); 
        $scope.getTile = updateTiles();

        $scope.$on('updateSchedule', function() {
            console.log('change');
            $scope.getTile = updateTiles();
        });
        function updateTiles() {
            console.log('update');
            var array = [];
            if (localStorageService.get('schedule') === null)
               return []; 
            var schedule = localStorageService.get('schedule');
            console.log(localStorageService.get('schedule'));
            console.log(schedule);
            for (var i=0;i<12;i++) {
                for (var j=0;j<7;j++) {
                    if (schedule[i][j] === 0) {
                        array.push({ len:1, isclass: false, color: '#F5F5F5'});
                    }else if((i>0) && (schedule[i-1][j] < schedule[i][j])) {
                        console.log('class'+j.toString()+(i+1).toString());
                        var classInfo = localStorageService.get('class'+j.toString()+(i+1).toString());
                        array.push({ 
                            len: schedule[i][j], 
                            isclass: true,
                            name: classInfo[0],
                            teacher: classInfo[1],
                            address: classInfo[2],
                            color: getColor()
                        });
                    }
                    if ((i ===0) && (schedule[i][j] !== 0)) {
                        console.log('class'+j.toString()+(i+1).toString());
                        var classInfo = localStorageService.get('class'+j.toString()+(i+1).toString());
                        array.push({ 
                            len: schedule[i][j], 
                            isclass: true,
                            name: classInfo[0],
                            teacher: classInfo[1],
                            address: classInfo[2],
                            color: getColor()
                        });
                    }
                }
            }
            console.log(array);
            return array;
        }

        function getColor(){
            return colors[Math.floor((Math.random() * colors.length))];
        }

    }] 
);
