import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StandingsListsComponent } from './standings-lists.component';

describe('StandingsListsComponent', () => {
  let component: StandingsListsComponent;
  let fixture: ComponentFixture<StandingsListsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StandingsListsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsListsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
