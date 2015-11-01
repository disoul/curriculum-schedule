app.controller('addClassController', ['$scope', '$mdDialog', '$cookies', '$cookiesParse',
    function($scope, $mdDialog, $cookies, $cookiesParse) {
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
            starttime: '',
            endtime: '',
            address:'' 
        };
        $scope.days = ['一','二','三','四','五','六','日']
            .map(function(ele, index) {
                return {cn: ele, num: index};
        });
        $scope.classes = range(12, 1);
        $scope.commit = function() {
            console.log($scope.form);
            if (!updateScheduleArray(
                    parseInt($scope.form.day), parseInt($scope.form.starttime), 
                    parseInt($scope.form.endtime))) {
                console.log('Error!');
                console.log($cookies.get('schedule'));
            }else {
                $cookies.put(
                    'class'+$scope.form.day.toString()+$scope.form.starttime.toString(), 
                    [$scope.form.classname, $scope.form.teacher, $scope.form.address]            
                );
                console.log('Success!');
                $mdDialog.hide();            
            }
        };
        function updateScheduleArray(day, start, end) {
            console.log(day, start, end);
            if ($cookies.get('schedule') === undefined) {
                for (var i = start - 1;i < end;i++) {
                    blankSchedule[day][i] = end - i;
                }
                $cookies.put('schedule', blankSchedule);
                return true;
            }else {
                var cookiesSchedule = $cookiesParse.parseSchedule($cookies.get('schedule'));
                console.log(cookiesSchedule);
                for (var i = start - 1;i < end;i++) {
                    if  (cookiesSchedule[day][i] === 0) {
                        cookiesSchedule[day][i] = end - i;
                    }else {
                        console.log(cookiesSchedule[day][i]);
                        return false;
                    }
                }
                $cookies.put('schedule', cookiesSchedule);
                return true;
            }
        }
    }
]);
