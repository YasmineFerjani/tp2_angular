import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { ToastrService } from 'ngx-toastr';
import { Personne } from '../Model/Personne';

@Injectable({
  providedIn: 'root',
})
export class CvService {

  private apiUrl = 'https://apilb.tridevs.net/api/personnes';

  private cv_list: Personne[] = [
    {
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
    },
  ];


  constructor(private http: HttpClient,
    private toastr: ToastrService) { }

  getFullList(): Observable<Personne[]> {
    return this.http.get<Personne[]>(this.apiUrl).pipe(
      catchError(err => {
        this.toastr.error('Erreur lors du chargement des CV.', 'Erreur');
        return of(this.cv_list);
      })
    );
  }

  getCvById(id: number): Personne | null {
    const cv = this.cv_list.find((cv) => cv.id === id);
    return cv ?? null;
  }

  deleteCvById(id: number): void {
    const idx = this.cv_list.findIndex((cv) => cv.id === id);
    if (idx !== -1) {
      this.cv_list.splice(idx, 1);
    }
  }

  updateCv(id: number, newValues: Partial<Personne>) {
  const idx = this.cv_list.findIndex(cv => cv.id === id);

  if (idx !== -1) {
    this.cv_list[idx] = {
      ...this.cv_list[idx],
      ...newValues
      };
    }
  }

}
