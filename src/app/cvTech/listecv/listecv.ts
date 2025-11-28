import { Component, output } from '@angular/core';
import { Personne } from '../../Model/Personne';


@Component({
  standalone:true,
  selector: 'app-listecv',
  imports: [],
  templateUrl: './listecv.html',
  styleUrl: './listecv.css',
})
export class Listecv {

  personnes : Personne[] = [{
        id: 1,
        name: 'Yasmine',
        firstname: 'Chaari',
        age: 21,
        cin: 12345678,
        path: 'image.png',
        job: 'Student',
        description:
          'I am a computer science student passionate about web development and AI.',
      },
      {
        id: 2,
        name: 'Random',
        firstname: 'Person',
        age: 30,
        cin: 12345678,
        path: 'random.jpg',
        job: 'Developer',
        description:
          'Experienced developer with a focus on front-end technologies and UX design.',
      },]; 

  selected_person = output<Personne>();

  ngOnInit() {
  this.selected_person.emit(this.personnes[0]);
  }


  change_selected_cv(prs: Personne) {
      this.selected_person.emit(prs);
  }

  

  
  
}
