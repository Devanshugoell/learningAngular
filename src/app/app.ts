import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})
 

export class App {
 count = 1;

 counter = signal(10);

 getName (name : string) {
     console.log(name)
 }
}
