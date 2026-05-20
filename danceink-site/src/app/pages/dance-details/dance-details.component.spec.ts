import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanceDetailsComponent } from './dance-details.component';

describe('DanceDetailsComponent', () => {
  let component: DanceDetailsComponent;
  let fixture: ComponentFixture<DanceDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DanceDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DanceDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
