import { Component, inject, output } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { CvService } from '../../services/cv-service';


@Component({
  standalone:true,
  selector: 'app-listecv',
  imports: [],
  templateUrl: './listecv.html',
  styleUrl: './listecv.css',
})
export class Listecv {
  CvService: CvService= inject(CvService);
  personnes: Personne[] = this.CvService.getFullList();

  selected_person = output<Personne>();

  ngOnInit() {
  this.selected_person.emit(this.personnes[0]);
  }


  change_selected_cv(prs: Personne) {
      this.selected_person.emit(prs);
  }

  

  
  
}
