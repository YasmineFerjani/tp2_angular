import { inject, Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  liste_embauche: Personne[] = []; 
  ToastrService = inject(ToastrService);

  embaucher(personne: Personne){
    if(this.liste_embauche.find((prs)=> prs.id === personne.id) == null){
        this.liste_embauche.push(personne);
    } 
    else{
      alert(personne.name + " est déjà embauché(e)");
      // this.ToastrService.error(personne.name + " est déjà embauché(e)", "Action Répétée", {timeOut:3000});
    }
  }
  getListeEmbaucheFull(): Personne[]{
    return this.liste_embauche;
  } 
}
