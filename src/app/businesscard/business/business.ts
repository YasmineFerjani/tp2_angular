import { Component, input, Input, signal } from '@angular/core';
import { Input as Input_1 } from '../input/input'
import { Show } from "../show/show";

@Component({
  standalone:true,
  selector: 'app-business',
  templateUrl: './business.html',
  styleUrls: ['./business.css'],
  imports: [Input_1, Show]
})
export class BusinessComponent {
  fullname = signal(''); 
  job = signal(''); 
  moto = signal(''); 
  description = signal(''); 
  email = signal(''); 
  phone = signal(''); 
  address = signal(''); 

  
}
