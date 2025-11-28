import { Component, input } from '@angular/core';

@Component({
  standalone:true,
  selector: 'app-show',
  imports: [],
  templateUrl: './show.html',
  styleUrl: './show.css',
})
export class Show {
    fullname = input<string>();
    job = input<string>();
    phone = input<string>();
    email = input<string>();
    description = input<string>();
    moto = input<string>();
    address = input<string>();
}
