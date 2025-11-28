import { Component, signal } from '@angular/core';
import { Personne } from '../../Model/Personne';
import { Listecv } from '../listecv/listecv';
import { ShowCv } from '../show-cv/show-cv';

@Component({
  standalone:true,
  selector: 'app-display',
  imports: [Listecv, ShowCv],
  templateUrl: './display.html',
  styleUrl: './display.css',
})
export class Display {
  personne = signal<Personne | null >(null);


}
