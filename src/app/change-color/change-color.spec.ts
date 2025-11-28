import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangeColor } from './change-color';

describe('ChangeColor', () => {
  let component: ChangeColor;
  let fixture: ComponentFixture<ChangeColor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChangeColor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChangeColor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
