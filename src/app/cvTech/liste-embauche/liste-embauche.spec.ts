import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeEmbauche } from './liste-embauche';

describe('ListeEmbauche', () => {
  let component: ListeEmbauche;
  let fixture: ComponentFixture<ListeEmbauche>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListeEmbauche]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeEmbauche);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
