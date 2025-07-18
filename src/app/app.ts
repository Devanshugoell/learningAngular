import { Component } from "@angular/core";
import { UserService } from "./service/user-service";
import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./app.html",
  styleUrls: ["./app.css"],
})
export class App {
  users: any[] = [];

  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getUsers();
  }

  getUsers() {
    this.userService.getUsers().subscribe((data: any) => {
      this.users = data;
      console.log("Users fetched:", this.users);
    });
  }

  addUser(user: string) {
    this.userService.saveUser(user).subscribe((data: any) => {
      if (data) {
        this.getUsers(); // Refresh the user list after saving
      }
    });
  }
}
