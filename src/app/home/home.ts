import { Component } from '@angular/core';
import {  RouterLink } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [RouterLink],
  templateUrl: './home.html',
  styleUrl: './home.css'
})


export class Home {
  users = [{
    id:'1',
    name : 'ABCD',
    age : 22,
    email : 'devgoyal952@gmail.com'
  },
{
    id:'2',
    name : 'EFGH',
    age : 23,
    email : 'devgoyal953@gmail.com'
  },
{
    id:'3',
    name : 'IJKL',
    age : 24,
    email : 'devgoyal954@gmail.com'
  },
{
    id:'4',
    name : 'MNOP',
    age : 25,
    email : 'devgoyal955@gmail.com'
  },
]
}
