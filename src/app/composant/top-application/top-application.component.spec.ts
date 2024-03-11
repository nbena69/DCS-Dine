import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopApplicationComponent } from './top-application.component';

describe('TopApplicationComponent', () => {
  let component: TopApplicationComponent;
  let fixture: ComponentFixture<TopApplicationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopApplicationComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TopApplicationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
