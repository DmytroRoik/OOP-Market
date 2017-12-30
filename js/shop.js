var ShopModule=(function(){
	var instance,
	items=[],
	selectedItems=[];

	var createInstance=function () {
		return {
			getAllItems: getAllItems,
			getSelectedItems: getSelectedItems,
			addItem: addItem,
			addItemToCart: addItemToCart,
		}
	}

	var addItem = function (item) {
		items.push(item);
	}

	var addItemToCart = function (element) {
		selectedItems.push(element);
		alert('items added to cart');
	}

	var getAllItems=function () {
		return items;
	}
	var getSelectedItems= function(){
		return selectedItems;
	}

	return {
		getInstance: function(){
			return instance|| (instance=createInstance());
		}
	}

})();
