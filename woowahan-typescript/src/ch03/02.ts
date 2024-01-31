type Product = {
    id: number,
    name: string,
    type: string,
    price: number,
    imageUrl: string,
    quantity: number;
}

type CardItem = {
    id: number;
    name: string;
    type: string;
    imageUrl: string;
}

type PromotionEventItem = 
| Product 
| CardItem;
