(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])    
        .controller('ToBuyController', ToBuyController)
        .controller('AlreadyBoughtController', AlreadyBoughtController)
        .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

    ToBuyController.$inject = ['ShoppingListCheckOffService'];

    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.items = ShoppingListCheckOffService.getToBuyItems();

        toBuyList.buyItem = function(itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex);
        };
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var alreadyBoughtList = this;

        alreadyBoughtList.items = ShoppingListCheckOffService.getAlreadyBuoughtItems();
    }

    function ShoppingListCheckOffService() {
        var service = this;
        var toBuyItems = [
            { name: "chips", quantity: 12 },
            { name: "cakes", quantity: 12 },
            { name: "strawberrys", quantity: 12 },
            { name: "blueberrys", quantity: 12 },
            { name: "donuts", quantity: 12 }
        ];
        var alreadyBoughtItems = [];

        service.buyItem = function(itemIndex) {
            var item = toBuyItems[itemIndex];

            alreadyBoughtItems.push(item);
            toBuyItems.splice(itemIndex, 1);
        };

        service.getToBuyItems = function() {
            return toBuyItems;0
        };

        service.getAlreadyBuoughtItems = function() {
            return alreadyBoughtItems;0
        };
    }
    
    })();