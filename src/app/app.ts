import { Component } from "@angular/core";
import { Products } from "./services/products";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  productList: any;
  constructor(private Products: Products) {}

  ngOnInit() {
    this.Products.getProductList().subscribe((data) => {
      this.productList = data;
    });
  }
}
