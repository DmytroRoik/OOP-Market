var ShopModule = (function() {
    var instance,
        items = [],
        selectedItems = [],
        soldItems = [];

    var createInstance = function() {
        return {
            getAllItems: getAllItems,
            getSelectedItems: getSelectedItems,
            addItem: addItem,
            addItemToCart: addItemToCart,
            removeSelectedItem: removeSelectedItemFromCart,
            CalcTotalPriceAndWeight: CalcTotalPriceAndWeight,
            soldItem: soldItem,
            getSoldItems: getSoldItems,
        }
    }

    var addItem = function(item) {
        items.push(item);
    }

    var addItemToCart = function(element) {
        selectedItems.push(element);
    }

    var getAllItems = function() {
        return items;
    }
    var getSelectedItems = function() {
        return selectedItems;
    }
    var removeSelectedItemFromCart = function(elem) {
        selectedItems.splice(selectedItems.indexOf(elem), 1)
    }
    var soldItem = function(item) {
        soldItems.push(item);
        removeSelectedItemFromCart(item);
    }
    var CalcTotalPriceAndWeight = function(selectedItems) {
        if (selectedItems.length === 0) return {
            price: 0,
            weight: 0
        };
        return selectedItems.reduce(function(prevValue, curValue, index, array) {
            return {
                price: prevValue.price + curValue.price,
                weight: prevValue.weight + curValue.weight
            }
        });
    }

    var getSoldItems = function() {
        return soldItems;
    }
    return {
        getInstance: function() {
            return instance || (instance = createInstance());
        }
    }

})();