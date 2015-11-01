app.service('$cookiesParse', function() {
    var self = this;
    this.parseSchedule = function(cookies){
        var scheduleArray = [];
        var cookiesArray = cookies.split(',');
        for(var i = 0;i < 7;i++){
            var inlineArray = [];
            for(var j = 0;j < 12;j++)
                inlineArray.push(parseInt(cookiesArray[i+j]));
            scheduleArray.push(inlineArray);
        }
        return scheduleArray;
    }
});
