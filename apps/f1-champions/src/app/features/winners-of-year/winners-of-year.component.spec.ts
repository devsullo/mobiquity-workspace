import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WinnersOfYearComponent } from './winners-of-year.component';

describe('WinnersOfYearComponent', () => {
  let component: WinnersOfYearComponent;
  let fixture: ComponentFixture<WinnersOfYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WinnersOfYearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersOfYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
