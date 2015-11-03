var app = angular.module(
    'classSchedule', 
    [
        'ngMaterial', 'LocalStorageModule', 'ngMessages'
    ]);

function range(amout, start) {                            
    var array = new Array(amout);                             
    for (var i = 0;i < amout;i++) {              
        array[i] = start + i;                               
    }
    return array;
}
 var blankSchedule = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
 ];
