import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class EmbaucheService {
  liste_embauche: Personne[] = []; 

  embaucher(personne: Personne){
    if(this.liste_embauche.find((prs)=> prs.id === personne.id) == null){
        this.liste_embauche.push(personne);
    } 
    else{
      alert(personne.name +' est déjà embauché!');
    }
  }
  getListeEmbaucheFull(): Personne[]{
    return this.liste_embauche;
  } 
}
