import { OrderStatus } from "./orderStatus";


export class Order {
    id: number;
    total: number;
    orderPlacedDate: Date;
    status: OrderStatus;

    constructor(id: number, total: number, orderPlacedDate: Date, status: OrderStatus){
        this.id = id;
        this.total = total;
        this.orderPlacedDate = orderPlacedDate;
        this.status = status;
    }
    

}