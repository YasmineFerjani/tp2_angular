import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CvDetails2 } from './cv-details2';

describe('CvDetails2', () => {
  let component: CvDetails2;
  let fixture: ComponentFixture<CvDetails2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CvDetails2]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CvDetails2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
