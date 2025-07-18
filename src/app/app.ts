import { CommonModule } from "@angular/common";
import { Component, Input } from "@angular/core";
import { CurrencyConverterPipe } from "./pipe/currency-converter-pipe";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, CurrencyConverterPipe],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  amount: number = 10;
}
