import { Component, Output,  EventEmitter } from '@angular/core';

@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.html',
  styleUrl: './user.css'
})

export class User {

  @Output() getUsers = new EventEmitter<string[]>();
  users = ["John", "Jane", "Doe", "Alice", "Bob", "Charlie", "Eve"];

  ngOnInit() {
    this.getUsers.emit(this.users);
  } 
}
