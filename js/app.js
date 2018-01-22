var $modalWindow=document.getElementById('modalWindow');
var $imgTooltip=$modalWindow.getElementsByClassName('tooltip')[0];
var shop=ShopModule.getInstance();
var selectedCartItems=[];


$modalWindow.getElementsByClassName('btnClose')[0].addEventListener('click',function () {
	$modalWindow.classList.add('hidden');
});

document.getElementById('btnCart').addEventListener('click',function () {//load cart

	createModal("Cart","cart",true);
});
document.getElementById('btnSoldItems').addEventListener('click',function(){
	createModal("Sold Items","order",false);
});

$modalWindow.getElementsByClassName('btnBuy')[0].addEventListener('click', function () {
	for(var el of selectedCartItems){
		shop.soldItem(el);
	}
	updateCart();
});
function createModal(title,type,showBtnBuy){
	$modalWindow.classList.remove('hidden');
	$modalWindow.getElementsByTagName('h1')[0].innerText=title;
	if(type=="cart"){
		updateCart();
	}
	else{
		updateOrder();
	}

	var $btnBuy=$modalWindow.getElementsByClassName('btnBuy')[0];
	if(showBtnBuy)$btnBuy.classList.remove('hidden');
	else $btnBuy.classList.add('hidden');
}

shop.addItem(new Item({id:0, type:"fruit",price: 40,weight:1.5,name:"apple", icon: "https://media.istockphoto.com/photos/red-apple-with-leaf-isolated-on-white-background-picture-id185262648?k=6&m=185262648&s=612x612&w=0&h=u9rMspGGTOkgUSzZ6INtT_Ww4NpGz9zHMGRmIJJjBqQ="}))
shop.addItem(new Item({id:1, type:"fruit",price: 50,weight:1,name:"strawberry", icon: "https://img.buzzfeed.com/buzzfeed-static/static/2015-03/6/14/enhanced/webdr06/enhanced-5904-1425669663-1.jpg?downsize=715:*&output-format=auto&output-quality=auto"}))
shop.addItem(new Item({id:2, type:"fruit",price: 55,weight:2,name:"pineapple", icon: "http://www.greatgrubclub.com/domains/greatgrubclub.com/local/media/images/medium/4_1_1_pineapple2.jpg"}))
shop.addItem(new Item({id:3, type:"fruit",price: 85,weight:5,name:"grapes", icon: "http://cdn2.momjunction.com/wp-content/uploads/2014/11/Week-9.jpg"}))
shop.addItem(new Item({id:4, type:"fruit",price: 80,weight:4,name:"orange", icon: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYj5qcxi0qf-wvfpO6mmfUxAP7wdWuete0LTRt68gxFMAxNJ19Ww"}))
shop.addItem(new Item({id:5, type:"fruit",price: 48,weight:2,name:"grapefruit", icon: "http://www.sodea-fruits.com/MTDsodea-fruit/gallery/slide-index/slide1.png"}))
shop.addItem(new Item({id:6, type:"vegetables",price: 30,weight:2,name:"tomato", icon: "https://td-k.com/images/demo/Kalinovka_about_us_09.png"}))
shop.addItem(new Item({id:7, type:"vegetables",price: 25,weight:4,name:"carrots", icon: "https://disted.edu.vn.ua/media/images/Natfil_/32/morkva2.jpg"}))
shop.addItem(new Item({id:8, type:"vegetables",price: 26,weight:5,name:"onion", icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Onions.jpg/230px-Onions.jpg"}))
shop.addItem(new Item({id:9, type:"vegetables",price: 40,weight:4,name:"cucumber", icon: "http://poradum.com/wp-content/uploads/2016/04/8f047bce24f340eb444f39bf6fbcec34.jpg"}))
shop.addItem(new Item({id:10,type:"vegetables",price: 10,weight:3,name:"radishes", icon: "http://roslyna.com/wp-content/uploads/images/foto_tenevinoslivie_ovoshi_dlya_ogoroda.jpg"}))
shop.addItem(new Item({id:12, type:"sweets",price: 90,weight:2,name:"cake", icon: "https://shefkuhar.com.ua/uploads/posts/2017-10/1507052642_gorhove-tstechko.jpg"}))
shop.addItem(new Item({id:13, type:"food",price: 34,weight:0.5,name:"egg", icon: "http://www.zid.com.ua/images/article/jajce.jpg"}))
shop.addItem(new Item({id:14, type:"food",price: 12,weight:1,name:"water", icon: "http://www.calorizator.ru/sites/default/files/imagecache/product_512/product/water-mineral.jpg"}))
shop.addItem(new Item({id:15, type:"food",price: 15,weight:0.5,name:"beer", icon: "http://fozzyshop.com.ua/64942-thickbox_default/pivo-grimbergen-double-ambree-temnoe.jpg"}))
shop.addItem(new Item({id:16, type:"fish",price: 30,weight:1,name:"fish", icon: "https://vidomosti-ua.com/photo/original-3661699865.jpg"}))
shop.addItem(new Item({id:17, type:"fish",price: 60,weight:2,name:"big fish", icon: "http://lovlia-na-dnistri.ru/images/kut.jpg"}))
shop.addItem(new Item({id:18, type:"fruit",price: 10,weight:1,name:"milk", icon: "http://fozzyshop.com.ua/50142-thickbox_default/moloko-prostokvashino-pasterizovannoe-1.jpg"}))
shop.addItem(new Item({id:19, type:"thing",price: 69,weight:3,name:"housewares", icon: "https://ua.all.biz/img/ua/catalog/1066255.jpeg"}))
shop.addItem(new Item({id:20, type:"food",price: 17,weight:1.2,name:"vermicelli", icon: "http://sostavproduktov.ru/sites/default/files/pictures/hleb/makaronnie/vermishel/bistrogo_prigotovleniya.jpg"}))


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
      Materialize.toast('Item added to cart!', 3000, 'rounded');
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


function createCartItemTemplate (item,index){
	var $li = document.createElement('li');
		$li.classList.add('cartItem');
		$li.addEventListener('mousemove', function (e) {
			$imgTooltip.src=item.icon;
			$imgTooltip.style.top=e.clientY-0.14*window.innerHeight+'px';
			$imgTooltip.style.left = e.clientX-0.19*window.innerWidth+'px';
			$imgTooltip.classList.remove('hidden');
		});
		$li.addEventListener('mouseleave', function (e) {
			$imgTooltip.classList.add('hidden');
    });
    // <input type="checkbox" id="test5" />
    //       <label for="test5">Red</label>

  var $checkInput=document.createElement('input');
  $checkInput.setAttribute('id','item-'+index);
    $checkInput.setAttribute('type', 'checkbox');
		$checkInput.checked=true;
		$checkInput.addEventListener('change', function () {
			UpdateTotalPriceAndWeight(shop.getSelectedItems());
    });
    var $label=document.createElement('label');
    $label.setAttribute('for','item-'+index);
    $label.innerText=item.name+", type: "+item.type+", Weight: " +item.weight+",Price: "+item.price+" hrn";

	var $btnClose=document.createElement('button');
	$btnClose.innerText='X';
	$btnClose.classList.add('btnClose');
	$btnClose.style.padding = '3px';
	$btnClose.addEventListener('click', function(){
		shop.removeSelectedItem(item);
		updateCart();
  })
	$li.append($checkInput, $label,$btnClose);
  return $li;
}

function createOrderItemTemplate (item,index){
	var $li = document.createElement('li');
		$li.classList.add('cartItem');
		$li.addEventListener('mousemove', function (e) {
			$imgTooltip.src=item.icon;
			$imgTooltip.style.top=e.clientY-0.14*window.innerHeight+'px';
			$imgTooltip.style.left = e.clientX-0.19*window.innerWidth+'px';
			$imgTooltip.classList.remove('hidden');
		});
		$li.addEventListener('mouseleave', function (e) {
			$imgTooltip.classList.add('hidden');
		})

	var $spanInfo=document.createElement('span');
		$spanInfo= index+') '+ item.name+", type: "+item.type+", Weight: " +item.weight+",Price: "+item.price+" hrn";
	$li.append($spanInfo);
  return $li;
}

function deleteItemsFromModal(){
	document.getElementById('CartList').innerHTML='';
}
function updateCart () {
	deleteItemsFromModal();
  var $cart=document.getElementById('CartList');
  var indexItem=0;
	for(var el of shop.getSelectedItems()){
		$cart.append(createCartItemTemplate(el,++indexItem));
	}
	$imgTooltip.classList.add('hidden');
	UpdateTotalPriceAndWeight(shop.getSelectedItems());
}
function updateOrder () {
	deleteItemsFromModal();
	var $cart=document.getElementById('CartList');
	var index=0;
	for(var el of shop.getSoldItems()){
		$cart.append(createOrderItemTemplate (el,++index));
	}
	$imgTooltip.classList.add('hidden');
	updateTotalInfoOrder(shop.getSoldItems());
}

function UpdateTotalPriceAndWeight(selectedItems){//for cart
	var $checkboxesItems=document.querySelectorAll('.cartItem input[type=checkbox]');
	selectedCartItems=[];

	for(var i=0;i<$checkboxesItems.length;i++){
		if($checkboxesItems[i].checked==true){
			selectedCartItems.push( selectedItems[i]);
		}
	}
	var total= shop.CalcTotalPriceAndWeight(selectedCartItems);

	var $spanTotalPrice=$modalWindow.querySelector('.total-price span');
	var $spanTotalWeight=$modalWindow.querySelector('.total-weight span');

	$spanTotalPrice.innerText=total.price;
	$spanTotalWeight.innerText=total.weight;
}
function updateTotalInfoOrder(){//for order

	var total=shop.CalcTotalPriceAndWeight(shop.getSoldItems());
console.log(total);
	var $spanTotalPrice=$modalWindow.querySelector('.total-price span');
	var $spanTotalWeight=$modalWindow.querySelector('.total-weight span');

	$spanTotalPrice.innerText=total.price;
	$spanTotalWeight.innerText=total.weight;
}

