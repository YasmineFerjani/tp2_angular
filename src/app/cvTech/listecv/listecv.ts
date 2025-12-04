import { Component, OnInit, inject, output } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { CvService } from '../../services/cv-service';

@Component({
  standalone: true,
  selector: 'app-listecv',
  imports: [],
  templateUrl: './listecv.html',
  styleUrl: './listecv.css',
})
export class Listecv {

  CvService = inject(CvService);

  personnes: Personne[] = [];
  selected_person = output<Personne>();

  constructor() {

    this.CvService.getFullList().subscribe((list) => {
      this.personnes = list;
      if (this.personnes.length > 0) {
        this.selected_person.emit(this.personnes[0]);
      }
    });
  }

  change_selected_cv(prs: Personne) {
    this.selected_person.emit(prs);
  }
}
