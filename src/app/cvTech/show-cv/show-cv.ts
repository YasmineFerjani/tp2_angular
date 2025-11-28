import { Component, input, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { Listecv } from '../listecv/listecv';

@Component({
  selector: 'app-show-cv',
  imports: [],
  templateUrl: './show-cv.html',
  styleUrl: './show-cv.css',
})
export class ShowCv {
  cv_to_show = input<Personne | null>();
}
