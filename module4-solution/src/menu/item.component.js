(function() {
    'use strict';

    angular.module('MenuApp')
        .component('items', {
            templateUrl: 'src/menu/templates/item.html',
            bindings: {
                items: '<'
            }
        });
})();