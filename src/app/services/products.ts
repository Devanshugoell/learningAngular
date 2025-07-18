import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class Products {
  constructor(private http: HttpClient) {}

  getProductList() {
    const url = "https://api.thecatapi.com/v1/images/search?limit=10";
    return this.http.get(url);
  }
}
