
 //Создаем класс для корзины товаров
 class Basket{
     constructor (basket){
        this.basket = basket;
    }  
    //метод добавления товара в корзину
    addBasketItem(){
        this.basket.push(basketItem); 
    }
    //Метод для вывода итоговой суммы корзины
    totalBasketPrice() {
    let totalPrice = 0;
    this.products.forEach (product => { 
        sum += product.price;
    });
    totalPrice.innerText = `Итого  ${sum} рублей`;
    }
}    

//Создаем класс для элемента корзины товаров
class BasketItem {
    constructor (basketItem) {
        this.basketitem = basketItem;
    }  
}

class GoodsList{
    constructor (goodsList){
        this.goodsList = goodsList;
    }
    //Метод, определяющий суммарную стоимость всех товаров
    totalGoodsPrice() {
        let totalGoods= 0;
        this.products.forEach (product => { 
            sum += product.price;
        });
        totalGoods.innerText = `Сумма всех товаров равна ${sum} рублей`;
        }
}


const basket = new Basket (['']);
const basketItem = new BasketItem (''); 
const goodsList = new GoodsList (['']);




const products = [
    {id: 1, title: 'Notebook', price: 1000},
    {id: 2, title: 'Mouse', price: 100},
    {id: 3, title: 'Keyboard', price: 250},
    {id: 4, title: 'Gamepad', price: 150},
];

const renderProduct = ({title, price}, img='https://via.placeholder.com/200x150') => {
    return `<div class="product-item" data-id="${this.id}">
                <img src="${img}>" alt="some img">
                <h3>${title}</h3>
                <p>${price}</p>
                <button class="by-btn"> Купить </button>
              </div>`;
};

const renderCatalog = (list) => {

const productsBlock = document.querySelector('.products');

list.forEach(good => {
    productsBlock.insertAdjacentHTML('beforeend', renderProduct(good));
});
};

renderCatalog(products);