import { Component, Input } from '@angular/core';
import { UserComponent } from './user/user';



@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [UserComponent], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})


export class App {
 userName: string = "devanshu2323";

  onUserChange(user : string) {
    this.userName = user;

  }
}
