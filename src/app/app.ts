import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Login } from './login/login';
import { Signup } from './signup/signup';
import { Profile } from './profile/profile';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Signup , Profile , Login],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  title = 'Devanshu';
  name = "Dev Goyal"

  // We cannot declare variables here we have to write properties like this.
 // title = "Devnashu";     ✔
 // const name = "Devanshu Goyal" ;  ❌

 //class ke andar properties banti h aur class ke bahar hamare variables 
 //and we can also declare variables in function 
}
