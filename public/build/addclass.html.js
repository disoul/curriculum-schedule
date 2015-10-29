app.run(['$templateCache', function($templateCache) {
    $templateCache.put('addclass.html',
        "<md-dialog ng-controller=\"addClassController\" id=\"addclass\">\n    <md-toolbar layout=\"row\" layout-align=\"space-around center\">\n        <h3 margin>添加课程</h3>\n        <span flex></span>\n        <md-button class=\"md-icon-button\" ng-click=\"cancel()\">\n            <md-icon md-svg-src=\"./public/asset/lnr-cross.svg\"></md-icon>\n        </md-button>\n    </md-toolbar>\n    <md-dialog-content>\n        <form name=\"addclass\">\n            <h2>\n                <md-icon md-svg-src=\"./public/asset/ic_school_black_24px.svg\"></md-icon><span>课程信息</span>\n            </h2>\n            <div layout=\"row\" layout-sm=\"column\">\n                <md-input-container>\n                    <label>课程名称</label>\n                    <input ng-model=\"form.classname\">\n                </md-input-container>\n                <md-input-container>\n                    <label>授课老师</label>\n                    <input ng-model=\"form.teacher\">\n                </md-input-container>\n            </div>\n            <h2>\n                <md-icon md-svg-src=\"./public/asset/ic_schedule_black_24px.svg\"></md-icon>\n                <span>上课时间<span></h2>\n            <md-input-container>\n                <label>上课日</label>\n                <md-select ng-model=\"form.day\">\n                    <md-option ng-repeat=\"day in days\" value=\"{{day.num}}\">\n                        星期{{day.cn}}\n                    </md-option>\n                </md-select>\n            </md-input-container>\n            <div layout=\"row\" layout-sm=\"column\">\n                <md-input-container>\n                    <label>开始时间</label>\n                    <md-select ng-model=\"form.starttime\">\n                        <md-option ng-repeat=\"class in classes\" value=\"{{class}}\">\n                            第{{class}}节\n                        </md-option>\n                    </md-select>\n                </md-input-container>\n                <md-input-container>\n                    <label>结束时间</label>\n                    <md-select ng-model=\"form.endtime\">\n                        <md-option ng-repeat=\"class in classes\" value=\"{{class}}\">\n                            第{{class}}节\n                        </md-option>\n                    </md-select>\n                </md-input-container>\n            </div>\n            <h2>\n                <md-icon md-svg-src=\"./public/asset/ic_room_black_24px.svg\"></md-icon>\n                <span>上课地点<span></h2>\n            <md-input-container>\n                <label>教室</label>\n                <input ng-model=\"form.address\">\n            </md-input-container>\n            <div class=\"buttons\" layout=\"row\" layout-align=\"end\">\n                <md-button class=\"md-raised md-primary\">确认</md-button>\n            </div>\n        </form>\n    </md-dialog-content>\n</md-dialog>\n");
}]);