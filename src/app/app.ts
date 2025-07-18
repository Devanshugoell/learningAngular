import { Component } from "@angular/core";
import { Product } from "./services/product";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  productData:
    | {
        name: string;
        price: number;
      }[]
    | undefined;

  constructor(private Product: Product) {
    console.log("App component initialized");
  }

  getProductData() {
    this.productData = this.Product.getProductData();
    console.log("Product data loaded:", this.productData);
  }
}
