import { Component, inject, input } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { ActivatedRoute, Router } from '@angular/router';
import { CvService } from '../../services/cv-service';

@Component({
  selector: 'app-cv-details',
  imports: [],
  templateUrl: './cv-details.html',
  styleUrl: './cv-details.css',
})
export class CvDetails {

  acr = inject(ActivatedRoute);
  CvService = inject(CvService); 
  router = inject(Router);

  id: number; 
  cv: Personne| null;
  constructor(){
    this.id = +this.acr.snapshot.params['id']; 
    this.cv = this.CvService.getCvById(this.id);
  }

  deleteCV(arg0: number) {
    this.CvService.deleteCvById(this.id);
    this.router.navigate(['cv']);
  }
  

}
