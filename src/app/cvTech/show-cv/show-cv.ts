import { Component, inject, input, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { Listecv } from '../listecv/listecv';
import { EmbaucheService } from '../../services/embauche-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-cv',
  imports: [],
  templateUrl: './show-cv.html',
  styleUrl: './show-cv.css',
})
export class ShowCv {
  EmbaucheService: EmbaucheService = inject(EmbaucheService);
  Router :Router = inject(Router);

  cv_to_show = input<Personne | null>();
  
  addEmbauche(){
    if (this.cv_to_show()){
      this.EmbaucheService.embaucher(this.cv_to_show()!);
    }
  }

  checkDetails(id:number ){
    this.Router.navigate(['cv', id]);
  }

}
