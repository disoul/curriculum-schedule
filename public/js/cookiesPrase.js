app.service('$cookiesParse', function() {
    var self = this;
    this.parseSchedule = function(cookies){
        var scheduleArray = [];
        var cookiesArray = cookies.split(',');
        for(var i = 0;i < 12;i++){
            var inlineArray = [];
            for(var j = 0;j < 7;j++)
                inlineArray.push(parseInt(cookiesArray[i*7+j]));
            scheduleArray.push(inlineArray);
        }
        return scheduleArray;
    };
});
