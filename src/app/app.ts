import {
  afterEveryRender,
  Component,
  afterNextRender,
  ViewChild,
} from "@angular/core";
import { User } from "./user/user";
import { NgIf } from "@angular/common";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [User, NgIf],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  @ViewChild("user") User: any;
  count = 0;

  constructor() {
    afterEveryRender(() => {
      console.log("afterEveryRender called", this.User.counter); // Called after every change detection cycle
    });

    afterNextRender(() => {
      console.log("afterNextRender called", this.User.counter); // Called after the next change detection cycle
    });
  }

  updateCounter() {
    this.count++;
  }
}
