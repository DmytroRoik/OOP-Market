var $modalWindow=document.getElementById('modalWindow');
document.getElementById('btnClose').addEventListener('click',function () {
	$modalWindow.classList.add('hidden');
});

document.getElementById('btnCart').addEventListener('click',function () {//load cart
	var $cart=document.getElementById('CartList');
	$cart.innerHTML='';
	console.log(shop.getSelectedItems())
	for(var el of shop.getSelectedItems()){
		$cart.append(createCartItemTemplate(el));
	}
	$modalWindow.classList.remove('hidden');
	UpdateTotalPriceAndWeight();
})


var shop=ShopModule.getInstance();

shop.addItem(new Item({id:0, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:1, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:2, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:3, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:4, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:5, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:6, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:7, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:8, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:9, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:10,type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:11,type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:12, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:13, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:14, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:15, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:16, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:17, type:"food",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:18, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:19, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:20, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:21, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:22, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:23, type:"fruit",price: 20,weight:20,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))

var $listItem=document.getElementById('Allitems');
for(var el of shop.getAllItems()){
	$listItem.append(createItemTemplate(el));
}

function createItemTemplate (item) {//for items list
	var $li=document.createElement('li');
	$li.classList.add('item');
	$li.setAttribute('data-id', item.id);

	var $hItemName=document.createElement('h3');
		$hItemName.innerText=item.name;
	var $imgItemIcon=document.createElement('img');
		$imgItemIcon.src=item.icon;
	var $spanItemWeight=document.createElement('span');
		$spanItemWeight.innerText='weight: '+item.weight;
	var $spanItemPrice=document.createElement('span');
		$spanItemPrice.innerText='Price: '+item.price+' hrn';
	var $buttonAddToCart=document.createElement('button');
		$buttonAddToCart.innerText='Add to Cart';
		$buttonAddToCart.addEventListener('click',function (e) {
			var id= +(e.target.parentNode.getAttribute('data-id'));
			for (var i = shop.getAllItems().length - 1; i >= 0; i--) {
				if(shop.getAllItems()[i].id==id){
					shop.addItemToCart(shop.getAllItems()[i]);
					return;
				}
			}
		});
		$li.append($hItemName,$imgItemIcon,$spanItemWeight,$spanItemPrice,$buttonAddToCart);
		return $li;
	}
var $image=document.createElement('img');
			$image.style.height = '200px';
			$image.style.width = '200px';
			$image.style.position = 'absolute';
			$image.style.borderRadius = '40px';
			$image.style.overflow = 'hidden';
function createCartItemTemplate (item){
	var $li = document.createElement('li');
		$li.classList.add('cartItem');
		$li.addEventListener('mousemove', function (e) {
			$image.src=item.icon;
			$image.style.top=e.clientY-0.14*window.innerHeight+'px';
			$image.style.left = e.clientX-0.19*window.innerWidth+'px';
			$modalWindow.append($image);
		});
		$li.addEventListener('mouseleave', function (e) {
			$modalWindow.removeChild($image);
		})
	var $checkInput=document.createElement('input');
		$checkInput.setAttribute('type', 'checkbox');
		$checkInput.checked=true;
		$checkInput.addEventListener('change', function () {
			UpdateTotalPriceAndWeight();
		});
	var $spanInfo=document.createElement('span');
	$spanInfo=item.name+", type: "+item.type+", Weight: " +item.weight+",Price: "+item.price+" hrn";
	$li.append($checkInput,$spanInfo);
  return $li;
}
function UpdateTotalPriceAndWeight(){//for cart
	var $checkboxesItems=document.querySelectorAll('.cartItem input[type=checkbox]');
	var selectedItems=shop.getSelectedItems();
	var totalPrice=0,
		totalWeight=0;
	for(var i=0;i<$checkboxesItems.length;i++){
		if($checkboxesItems[i].checked==true){
			totalPrice+=selectedItems[i].price;
			totalWeight+=selectedItems[i].weight;
		}
	}
	var $spanTotalPrice=$modalWindow.querySelector('.total-price span');
	var $spanTotalWeight=$modalWindow.querySelector('.total-weight span');
	console.log($spanTotalWeight.innerText);
	$spanTotalPrice.innerText=totalPrice;
	$spanTotalWeight.innerText=totalWeight;
}
