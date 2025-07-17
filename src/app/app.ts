import { Component, Input } from '@angular/core';
import { User } from './user/user';

@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [User], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})


export class App {
  users = ["John", "Jane", "Doe", "Alice", "Bob","Charlie","Eve"];
}
