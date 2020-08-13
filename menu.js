//////////////////////
//Restaurant Menu
//////////////////////
const starters = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"APPETIZERS" },' +
		'{ "type":"food", "name":"NACHOS", "description":"with 2 dips of your choice, gratinated with cheese and sliced chicken", "price":"10.50" },' +
		'{ "type":"separator", "description":"SALADS" },' +
		'{ "type":"food", "name":"CHICKEN CHILI SALAD", "description":"mixed salad, fried sliced chicken marinated with honey and chili", "price":"25.00" },' +
		'{ "type":"food", "name":"CAESAR`S SALAD", "description":"Lettuce with fried baconstrips, croûtons, Grana Padano, egg and Caesar Dressing", "price":"16.00" } ]'
);
const mains = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"PIZZA" },' +
		'{ "type":"food", "name":"MARGHERITA", "description":"Tomato sauce, mozzarella, organic oregano", "price":"18.00" },' +
		'{ "type":"food", "name":"PROSCIUTTO", "description":"Tomato sauce, mozzarella, ham, organic oregano", "price":"21.50" },' +
		'{ "type":"separator", "description":"MEAT & FISH" },' +
		'{ "type":"food", "name":"FISH & CHIPS", "description":"Cod in beer batter with french fries and mashed peas", "price":"25.00" },' +
		'{ "type":"separator", "description":"PASTA" },' +
		'{ "type":"food", "name":"LINGUINE", "description":"on spinach sauce with cherry tomatoes, fennel, feta and pine nuts", "price":"25.00" },' +
		'{ "type":"food", "name":"RAVIOLI", "description":"filled with truffle-ricotta and hazelnuts butter", "price":"28.50" } ]'
);
const desserts = JSON.parse(
	"[" +
		'{ "type":"separator", "description":"SWEETS" },' +
		'{ "type":"food", "name":"CHOCOLATE MOUSSE", "description":"with star anise, a pecan brownie and salty caramel sauce", "price":"12.00" },' +
		'{ "type":"food", "name":"TIRAMISU", "description":"rolled rhubarb pistachio with vanilla strawberry amaretto sauce", "price":"13.50" },' +
		'{ "type":"food", "name":"FRUIT SALAD", "description":"exotic fruits with tapioca pearls mango sorbet and homemade coconut liqueur", "price":"10.50" } ]'
);
const drinks = JSON.parse(
	"[" +
		'{ "type":"drink", "name":"STILL WATER", "description":"5dl", "price":"4.50" },' +
		'{ "type":"drink", "name":"SODA", "description":"3dl", "price":"5.50" },' +
		'{ "type":"drink", "name":"TAP WATER", "description":"", "price":"FREE" },' +
		'{ "type":"drink", "name":"CAFE LATTE", "description":"", "price":"4.50" },' +
		'{ "type":"drink", "name":"TEA", "description":"", "price":"5.00" } ]'
);

/////////////////////////////////////////////////////////////////
let sl = 0;

let startersbutton = document.getElementById("startersbutton");
let mainsbutton = document.getElementById("mainsbutton");
let dessertsbutton = document.getElementById("dessertsbutton");
let drinksbutton = document.getElementById("drinksbutton");

let ni1 = document.getElementById("ni1");
let ni2 = document.getElementById("ni2");
let ni3 = document.getElementById("ni3");
let ni4 = document.getElementById("ni4");

startersbutton.addEventListener("click", (e) => {
	setIndicator(0);
	populateItems(starters);
});
mainsbutton.addEventListener("click", (e) => {
	setIndicator(1);
	populateItems(mains);
});
dessertsbutton.addEventListener("click", (e) => {
	setIndicator(2);
	populateItems(desserts);
});
drinksbutton.addEventListener("click", (e) => {
	setIndicator(3);
	populateItems(drinks);
});

function populateItems(items) {
	let menu = document.querySelector(".menu");
	menu.innerHTML = "";
	for (i = 0; i < items.length; i++) {
		if (items[i].type === "separator") {
			let menuitem = document.createElement("div");
			menuitem.setAttribute("class", "menu-separator");
			menuitem.innerHTML = items[i].description;
			menu.appendChild(menuitem);
		}
		if (items[i].type === "food") {
			let menuitem = document.createElement("div");
			let menuitemname = document.createElement("div");
			let menuitemdesc = document.createElement("div");
			let menuitemprize = document.createElement("div");
			menuitem.setAttribute("class", "menu-item");
			menuitemname.setAttribute("class", "menu-item-name");
			menuitemdesc.setAttribute("class", "menu-item-description");
			menuitemprize.setAttribute("class", "menu-item-price");

			menuitemname.innerHTML = items[i].name;
			menuitemdesc.innerHTML = items[i].description;
			menuitemprize.innerHTML = items[i].price;

			menuitem.appendChild(menuitemname);
			menuitem.appendChild(menuitemdesc);
			menuitem.appendChild(menuitemprize);
			menu.appendChild(menuitem);
		}
		if (items[i].type === "drink") {
			let drinkitem = document.createElement("div");
			let drinkitemname = document.createElement("div");
			let drinkitemdesc = document.createElement("div");
			let drinkitemprize = document.createElement("div");
			drinkitem.setAttribute("class", "drink-item");
			drinkitemname.setAttribute("class", "drink-item-name");
			drinkitemdesc.setAttribute("class", "drink-item-description");
			drinkitemprize.setAttribute("class", "drink-item-price");

			drinkitemname.innerHTML = items[i].name;
			drinkitemdesc.innerHTML = items[i].description;
			drinkitemprize.innerHTML = items[i].price;

			drinkitem.appendChild(drinkitemname);
			drinkitem.appendChild(drinkitemdesc);
			drinkitem.appendChild(drinkitemprize);
			menu.appendChild(drinkitem);
		}
	}
}
function setIndicator(sel) {
	sl = sel;
	let vp = "";
	if (window.innerWidth < 800) {
		vp = "60px";
	} else {
		vp = "85%";
	}
	let elems = [ni1, ni2, ni3, ni4];
	for (i = 0; i < elems.length; i++) {
		if (i === sel) {
			elems[i].style.width = vp;
			elems[i].style.boxShadow = "2px 2px 10px 2px var(--icolor" + (i + 1) + ")";
		} else {
			elems[i].style.width = "0";
			elems[i].style.boxShadow = "none";
		}
	}
}

window.addEventListener("resize", (e) => {
	setIndicator(sl);
});

//default runs
setIndicator(sl);
populateItems(starters);
