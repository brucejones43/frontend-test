import { Cart } from "./cart";
import { OrderStatus } from "./orderStatus";


export class Order {
    id: number;
    total: number;
    cart: Cart;
    orderPlacedDate: Date;
    status: OrderStatus;

    constructor(id: number, total: number, cart: Cart, orderPlacedDate: Date, status: OrderStatus){
        this.id = id;
        this.total = total;
        this.cart = cart;
        this.orderPlacedDate = orderPlacedDate;
        this.status = status;
    }
    

}