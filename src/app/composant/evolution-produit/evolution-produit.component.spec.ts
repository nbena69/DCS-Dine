import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionProduitComponent } from './evolution-produit.component';

describe('EvolutionProduitComponent', () => {
  let component: EvolutionProduitComponent;
  let fixture: ComponentFixture<EvolutionProduitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionProduitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvolutionProduitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
