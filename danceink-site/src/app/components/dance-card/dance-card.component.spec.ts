import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceCardComponent } from './dance-card.component';

describe('DanceCardComponent', () => {
  let component: DanceCardComponent;
  let fixture: ComponentFixture<DanceCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceCardComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanceCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
