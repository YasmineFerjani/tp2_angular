import { Component, inject, input, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv-service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-cv-details',
  imports: [FormsModule],
  templateUrl: './cv-details2.html',
  styleUrl: './cv-details2.css',
})
export class CvDetails {

  acr = inject(ActivatedRoute);
  CvService = inject(CvService); 
  router = inject(Router);

  id: number; 
  actual_cv: Personne| null;
  cv: Personne| null;
  constructor(){
    this.id = +this.acr.snapshot.params['id']; 
    this.actual_cv = this.CvService.getCvById(this.id);
    this.cv = this.actual_cv ? { ...this.actual_cv } : null;
  }

  deleteCV(arg0: number) {
    this.CvService.deleteCvById(this.id);
    this.router.navigate(['cv']);
  }

  onSaveChanges(form: NgForm) {
    if (!this.cv) return;

    this.CvService.updateCv(this.id, form.value);
    this.router.navigate(['cv']);
  }
  

}
