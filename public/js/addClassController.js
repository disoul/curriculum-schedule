app.controller('addClassController', ['$scope', '$mdDialog', 'localStorageService', '$rootScope',
    function($scope, $mdDialog, localStorageService, $rootScope) {
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
                console.log(localStorageService.get('schedule'));
            }else {
                localStorageService.set(
                    'class'+$scope.form.day.toString()+$scope.form.starttime.toString(), 
                    [$scope.form.classname, $scope.form.teacher, $scope.form.address]            
                );
                console.log('Success!');
                $rootScope.$broadcast('updateSchedule');
                $mdDialog.hide();            
            }
        };
        function updateScheduleArray(day, start, end) {
            console.log(day, start, end);
            if (localStorageService.get('schedule') === null) {
                for (var i = start - 1;i < end;i++) {
                    blankSchedule[i][day] = end - i;
                }
                localStorageService.set('schedule', blankSchedule);
                console.log(blankSchedule);
                return true;
            }else {
                var cookiesSchedule = localStorageService.get('schedule');
                console.log(cookiesSchedule);
                for (var i = start - 1;i < end;i++) {
                    if  (cookiesSchedule[i][day] === 0) {
                        cookiesSchedule[i][day] = end - i;
                    }else {
                        console.log(cookiesSchedule[i][day]);
                        console.log(localStorageService.get('schedule'));
                        return false;
                    }
                }
                localStorageService.set('schedule', cookiesSchedule);
                console.log(cookiesSchedule);
                console.log(localStorageService.get('schedule'));
                return true;
            }
        }
    }
]);
