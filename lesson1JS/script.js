// Hello.
//
// This is JSHint, a tool that helps to detect errors and potential
// problems in your JavaScript code.
//
// To start, simply enter some JavaScript anywhere on this page. Your
// report will appear on the right side.
//
// Additionally, you can toggle specific options in the Configure
// menu.

var first = prompt('Какой тип товаров будет?', '');
var second = prompt('Какой тип товаров будет?', '');
var third = prompt('Какой тип товаров будет?', '');
var MainList = {
	balance: 50,
	nameShop: 'VapeBar',
	ShopGoods: [first, second, third],
	employers: {
		Name: 'Devid',
	
	},
	open: true
};
console.log(MainList.balance);