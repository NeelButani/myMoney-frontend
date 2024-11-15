import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FinicialStatsComponent } from './finicial-stats.component';

describe('FinicialStatsComponent', () => {
  let component: FinicialStatsComponent;
  let fixture: ComponentFixture<FinicialStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FinicialStatsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FinicialStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
