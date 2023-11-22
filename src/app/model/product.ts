export enum Category {
    Vegetable,
    Meat,
    Dairy,
    Furnature,
    Utensils,
    DIY
}

export interface Product {
    description: String;
    expiry?: Date;
    category: Category;
    price: number;
    special: Boolean;
}