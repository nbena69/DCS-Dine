import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvolutionMontantComponent } from './evolution-montant.component';

describe('EvolutionMontantComponent', () => {
  let component: EvolutionMontantComponent;
  let fixture: ComponentFixture<EvolutionMontantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EvolutionMontantComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EvolutionMontantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
