import { Component, effect, Signal, signal, WritableSignal , computed } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-root',
  standalone: true,                 
  imports: [RouterOutlet, ButtonModule,FormsModule], 
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
})


export class App {

zoom = false;

BigHeading = "100px";
SmallHeading = "10px";

updateHeadingSize() {
  this.zoom = !this.zoom;
}

Bigger = "50px";
}
