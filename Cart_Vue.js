' use strict';

const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";

const app = new Vue({
	el: '#app',
	data: {
		social_links: {
			
			'fa-GB': 'https://gb.ru',

		},

		btnNum: 0,
		catalogUrl: "/catalogData.json",
		imgCatalog: "img/placeholder.png",
		basketItems: [],
		//products = [],
		products: [{
			"id_product": 123,
			"product_name": "Ноутбук",
			"price": 45600,
			"quantity": 1,
		},
		{
			"id_product": 456,
			"product_name": "Мышка",
			"price": 1000,
			"quantity": 1,
		},
        {
			"id_product": 789,
			"product_name": "Клавиатура",
			"price": 5000,
			"quantity": 1,
		},
        {
			"id_product": 321,
			"product_name": "Наушники",
			"price": 2000,
			"quantity": 1,
		},
		],

		filtered: [],
		isVisibleCart: false,
		searchLine: '',
	},

  


	methods: {
		cleanText() {
			this.searchLine = '';
		},
		getJson(url) {
			return fetch(url) 
				.then(result => result.json())
				.catch(error => {
					console.log(error);
				});
		},
		addProduct(item) {
			this.getJson(`${API}/addToBasket.json`)
				.then(data => {
					console.log(data);
					if (data.result === 1) {
						let find = this.basketItems.find(el => el.id_product === item.id_product);
						if (find) {
							find.quantity++;
						} else {
							let prod = Object.assign({ quantity: 1 }, item);
							this.basketItems.push(prod);
						}
					} else {
						alert('Error');
					}
			});			
		},

		remove(item) {
			this.getJson(`${API}/deleteFromBasket.json`)
				.then(data => {
					console.log(data); 
					if (data.result === 1) {
						if (item.quantity > 1) {
							item.quantity--;
						} else {
							this.basketItems.splice(this.basketItems.indexOf(item), 1);
						}
					}
				});
		},




		showBtnNum() {
			this.btnNum = Math.floor((Math.random() * 100) + 1);
		},

		filter() {
			let regexp = new RegExp(this.searchLine, 'i');
			this.filtered = this.basketItems.filter(el => regexp.test(el.product_name));
			console.log(this.searchLine);
			console.log(regexp);
			console.log(this.basketItems);
			console.log(this.filtered);
		},

		beforeCreate() { //Хук Жизненного цикла-1. Cрабатывает перед созданием приложения
		},

		created() { //Хук Жизненного цикла-2. Срабатывает когда приложение создано и перед тем, как начало монтироваться
			this.getJson(`${API}/catalogData.json`)
				.then((data) => {
					console.log(data);
					this.products = data;
				});
						
		},

		beforeMount() { //Хук Жизненного цикла-3. Выполняется перед тем как мы хотим смонтировать нашу страницу.

		},


		mounted() { //Хук Жизненного цикла-4.Выполняется когда приложение уже смотнировано

		},

		beforeUpdate() { //Хук Жизненного цикла-5.Выполняется перед обновлением приложения

		},

		updated() { //Хук Жизненного цикла-6.Выполняется после обновления приложения

		},

		beforeDestroy() { //Хук Жизненного цикла-7.Выполняется перед тем, как уничтожится текущее приложение или компонент

		},

		destroyed() {} //Хук Жизненного цикла-8.Выполняется после того, как уничтожится текущее приложение или компонент
	},
	computed: { 

	}
})

	