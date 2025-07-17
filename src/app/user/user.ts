
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.html',
  styleUrls: ['./user.css']
})
export class UserComponent {
  @Input() user: string = "";
  @Input() city:string = "";
}
