export class Order {
    id: number;
    total: number;
    orderDate: Date;
    status: string;

    constructor(id: number, total: number, orderDate: Date, status: string){
        this.id = id;
        this.total = total;
        this.orderDate = orderDate;
        this.status = status;
    }

}