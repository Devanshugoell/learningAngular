import { Component } from '@angular/core';
import { Header } from './header/header';
import { RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [RouterOutlet,Header], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})


export class App {

}
