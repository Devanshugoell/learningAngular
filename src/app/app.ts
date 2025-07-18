import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [CommonModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})


export class App {
  title = `hi i am the parent component`;
  name = 'Devanshu';

  amount = 1000;

  currentDate  = new Date();
}
