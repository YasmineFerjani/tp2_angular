import { Component, input, output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  standalone:true,
  selector: 'app-input',
  imports: [FormsModule],
  templateUrl: './input.html',
  styleUrl: './input.css',
})
export class Input {
  fullname = output<string>(); 
  job = output<string>(); 
  phone = output<string>(); 
  email = output<string>(); 
  description = output<string>(); 
  moto = output<string>(); 
  address = output<string>(); 
  



  updateFullName( newValue: string) {
    this.fullname.emit(newValue);
  }

  updateJob( newValue: string) {
    this.job.emit(newValue);
  }
  updatePhone( newValue: string) {
    this.phone.emit(newValue);
  }

  updateEmail( newValue: string) {
    this.email.emit(newValue);
  }

  updateDescription( newValue: string) {
    this.description.emit(newValue);
  }

  updateMoto( newValue: string) {
    this.moto.emit(newValue);
  }

  updateAddress( newValue: string) {
    this.address.emit(newValue);
  }


}


