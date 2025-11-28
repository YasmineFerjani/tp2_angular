import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BusinessComponent } from './businesscard/business/business';
import { ChangeColorComponent } from './change-color/change-color';
import { Listecv } from './cvTech/listecv/listecv';
import { Display } from './cvTech/display/display';

@Component({
  standalone:true,
  selector: 'app-root',
  imports: [RouterOutlet, BusinessComponent, ChangeColorComponent, Display],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('tp2_angular');
}
