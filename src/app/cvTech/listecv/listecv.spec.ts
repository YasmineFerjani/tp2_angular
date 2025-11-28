import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Listecv } from './listecv';

describe('Listecv', () => {
  let component: Listecv;
  let fixture: ComponentFixture<Listecv>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Listecv]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Listecv);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
