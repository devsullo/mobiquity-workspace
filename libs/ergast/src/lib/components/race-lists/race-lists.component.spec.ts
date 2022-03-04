import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RaceListsComponent } from './race-lists.component';

describe('RaceListsComponent', () => {
  let component: RaceListsComponent;
  let fixture: ComponentFixture<RaceListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RaceListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
