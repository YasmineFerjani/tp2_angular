import { Injectable } from '@angular/core';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {
  cv_list : Personne[] = [{
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


  getFullList(){
    return this.cv_list;
  }

  getCvById(id:number){
    return this.cv_list.find((cv) => cv.id === id);
  }
}
