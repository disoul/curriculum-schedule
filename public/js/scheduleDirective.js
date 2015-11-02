app.directive('gridTile', function() {
    return {
        restrice: 'E',
        scope: {
            tiles: '=',
            week: '=',
        },
        templateUrl: 'grid.html',
    };
});
