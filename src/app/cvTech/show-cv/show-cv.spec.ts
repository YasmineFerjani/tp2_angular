import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCv } from './show-cv';

describe('ShowCv', () => {
  let component: ShowCv;
  let fixture: ComponentFixture<ShowCv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
