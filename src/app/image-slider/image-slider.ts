import { Component } from '@angular/core';
import { AsyncPipe } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable, interval } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-image-slider',
  standalone: true,
  imports: [AsyncPipe, FormsModule],
  templateUrl: './image-slider.html',
  styleUrls: ['./image-slider.css'],
})
export class ImageSlider {
  height = 150;
  width = 150;
  speed = 1000;

  images: string[] = [
    'assets/images/image.png',
    'assets/images/random.jpg',
    'assets/images/placeholder.jpg'
  ];

  image$: Observable<string> = this.createStream();

  createStream(): Observable<string> {
    return interval(this.speed).pipe(
      startWith(0),
      map(i => this.images[i % this.images.length])
    );
  }

  onSpeedChange() {
    this.image$ = this.createStream();
  }

}
