import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Category, Product } from '../model/product';



@Injectable({
  providedIn: 'root'
})
export class ProductService {

  products: Product[] = [
    {
      description: "Pork",
      expiry: new Date("11/23/2023"),
      category: Category.Meat,
      price: 3.99,
      special: false
    }, {
      description: "Chicken",
      expiry: new Date("11/21/2023"),
      category: Category.Meat,
      price: 1.99,
      special: false
    }, {
      description: "Cabbage",
      expiry: new Date("11/22/2023"),
      category: Category.Vegetable,
      price: 0.99,
      special: false
    }, {
      description: "Cucumber",
      expiry: new Date("11/25/2023"),
      category: Category.Vegetable,
      price: 1.29,
      special: false
    }, {
      description: "Milk",
      expiry: new Date("11/23/2023"),
      category: Category.Dairy,
      price: 1.40,
      special: false
    }, {
      description: "Cheese",
      expiry: new Date("12/14/2023"),
      category: Category.Dairy,
      price: 3.50,
      special: false
    }, {
      description: "Chair",
      category: Category.Furnature,
      price: 16.99,
      special: false
    }, {
      description: "Roundtable",
      category: Category.Furnature,
      price: 33.99,
      special: true
    }, {
      description: "Knifes",
      category: Category.Utensils,
      price: 9.99,
      special: false
    }, {
      description: "Spatula",
      category: Category.Utensils,
      price: 2.65,
      special: false
    }, {
      description: "Hammer",
      category: Category.DIY,
      price: 17.99,
      special: false
    }, {
      description: "Saw",
      category: Category.DIY,
      price: 9.99,
      special: true
    },
  ]

  constructor() { 

  }

  getProducts(): Observable<Product[]> {
    return of(this.products);
  }
}
