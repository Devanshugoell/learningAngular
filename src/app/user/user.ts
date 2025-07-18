import { Component, Input } from "@angular/core";

@Component({
  selector: "app-user",
  imports: [],
  templateUrl: "./user.html",
  styleUrl: "./user.css",
})
export class User {
  @Input() counter: number = 0;

  constructor() {
    console.log("constructor called"); // Component ka view initialize hone se pehle constructor call hota hai
    // Called before ngOnInit(), but DOM is not yet initialized
  }

  ngOnInit() {
    console.log("ngOnInit called"); // Called once the component's view has been fully initialized
  }

  ngOnDestroy() {
    console.log("ngOnDestroy called"); // Called just before the component is destroyed
  }

  ngOnChanges() {
    console.log("ngOnChanges called"); // Called when any data-bound input property changes
  }
}
