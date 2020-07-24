! function() {
    function e(e) {
        var t = this;
        t.items = e.getbuyItems(), t.removeItems = function(n) { try { e.removeItems(n) } catch (e) { t.errorMessage = e.message } }
    }

    function t(e) { this.items = e.getboughtItems(), this.errorMessage = "No items are Bought" }
    angular.module("ShoppingListCheckOff", []).controller("ToBuyController", e).controller("AlreadyBoughtController", t).service("ShoppingListCheckOffService", function() {
            var e = [{ name: "Cookies", quantity: 10 }, { name: "Chips", quantity: 5 }, { name: "Soda", quantity: 8 }, { name: "Cake", quantity: 1 }, { name: "Nachos", quantity: 8 }, { name: "Chocolates", quantity: 10 }],
                t = [];
            this.getbuyItems = function() { return e }, this.removeItems = function(n) {
                var i = e.splice(n, 1),
                    o = { name: i[0].name, quantity: i[0].quantity };
                t.push(o)
            }, this.getboughtItems = function() { return t }
        }),
        e.$inject = ["ShoppingListCheckOffService"], t.$inject = ["ShoppingListCheckOffService"]
}();