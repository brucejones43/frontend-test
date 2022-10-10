import { Cart } from "./cart";
import { Product } from "./product";

export class CartItem{
    id:number
    quantity:number
    product:Product
    cart: Cart

    constructor(id:number, quantity:number, product: Product, cart: Cart){
        this.id = id;
        this.quantity = quantity;
        this.product = product;
        this.cart = cart;
    }
}