import { Component, signal, WritableSignal } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-change-color',
  templateUrl: './change-color.html',
  styleUrls: ['./change-color.css'],
})
export class ChangeColorComponent {
  backgroundColor : WritableSignal<string> = signal('white');

  onColorChange(color: string) {
    this.backgroundColor.set(color);
  }
  resetColor() {
    this.backgroundColor.set('white');
  }
}
