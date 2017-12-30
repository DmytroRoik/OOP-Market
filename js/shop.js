var ShopModule=(function(){
	var instance,
	items=[],
	selectedItems=[],
	soldItems=[];

	var createInstance=function () {
		return {
			getAllItems: getAllItems,
			getSelectedItems: getSelectedItems,
			addItem: addItem,
			addItemToCart: addItemToCart,
			removeSelectedItem: removeSelectedItemFromCart,
			soldItem:soldItem,
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
	var removeSelectedItemFromCart = function(elem){
		for(var i=0;i<selectedItems.length;i++){
			if(selectedItems[i]==elem){
				selectedItems.splice(i, 1);
				return;
			}
		}
	}
	var soldItem=function (item) {
		soldItems.push(item);
		removeSelectedItemFromCart(item);
	}
	var getSoldItems=function () {
		return soldItems;
	}
	return {
		getInstance: function(){
			return instance|| (instance=createInstance());
		}
	}

})();
