export class Product {
    id: number;
    name: string;
    quantity: number;
    price: number;
    description: string;
    image: string;
    brand: string;
    category: string;

    constructor (id: number, name: string, quantity: number, description: string, price: number, brand: string, category:string, image: string) {
        this.id = id;
        this.name = name;
        this.quantity = quantity;
        this.description = description;
        this.price = price;
        this.brand = brand;
        this.category = category;
        this.image = image;
    }
}
