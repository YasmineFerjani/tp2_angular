import { Component, inject, input, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { Listecv } from '../listecv/listecv';
import { EmbaucheService } from '../../services/embauche-service';

@Component({
  selector: 'app-show-cv',
  imports: [],
  templateUrl: './show-cv.html',
  styleUrl: './show-cv.css',
})
export class ShowCv {
  EmbaucheService: EmbaucheService = inject(EmbaucheService);
  cv_to_show = input<Personne | null>();
  
  addEmbauche(){
    if (this.cv_to_show()){
      this.EmbaucheService.embaucher(this.cv_to_show()!);
    }
  }

}
