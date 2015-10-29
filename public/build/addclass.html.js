angular.module('addClass').run(['$templateCache', function($templateCache) {
    $templateCache.put('addclass.html',
        "<md-dialog>\n    <md-dialog-content></md-dialog-content>\n</md-dialog>\n");
}]);
