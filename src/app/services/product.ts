import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Product {
  constructor() {
    console.log("Product service initialized");
  }

  getProductData() {
    return [
      { name: "mobile", price: 1000 },
      { name: "laptop", price: 50000 },
    ];
  }
}
