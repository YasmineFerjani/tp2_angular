import { Component, inject } from '@angular/core';
import { EmbaucheService } from '../../services/embauche-service';
import { Personne } from '../../Model/Personne';

@Component({
  standalone: true,
  selector: 'app-liste-embauche',
  imports: [],
  templateUrl: './liste-embauche.html',
  styleUrl: './liste-embauche.css',
})
export class ListeEmbauche {
  EmbaucheService: EmbaucheService = inject(EmbaucheService);
  personnes_embauchees: Personne[] = this.EmbaucheService.getListeEmbaucheFull();


}
