import { ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { of } from 'rxjs';
import { FirstStanding, SingleRace } from '../../models';

import { RaceListsComponent } from './race-lists.component';
import { raceTableMockData, standingsTableMockData } from '../../mocks';
import { ErgastModule } from '../../ergast.module';
import { By } from '@angular/platform-browser';
import { ChangeDetectorRef } from '@angular/core';

describe('RaceListsComponent', () => {
  let component: RaceListsComponent;
  let fixture: ComponentFixture<RaceListsComponent>;
  let changeDetectorRef: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErgastModule],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RaceListsComponent);
    component = fixture.componentInstance;
    changeDetectorRef =
      fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    component.excludeScrollHeightEl = 'h1';
    component.data = of({
      races: raceTableMockData.RaceTable.Races.map((r) => new SingleRace(r)),
      raceWinner: standingsTableMockData.StandingsTable.StandingsLists.map(
        (s) => new FirstStanding(s)
      ),
    });
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("shouldn't highlight row", () => {
    const highlightedRow = fixture.debugElement.query(By.css('tr.h-row'));
    expect(highlightedRow).toBe(null);
  });

  it('should highlight row twice', fakeAsync(() => {
    component.data = of({
      races: raceTableMockData.RaceTable.Races.map((r) => new SingleRace(r)),
      raceWinner: standingsTableMockData.StandingsTable.StandingsLists.map(
        (s) => {
          s.DriverStandings[0].Driver.driverId = 'hamilton';
          return new FirstStanding(s);
        }
      ),
    });
    fixture.detectChanges();
    changeDetectorRef.detectChanges();

    const highlightedRow = fixture.debugElement.queryAll(By.css('tr.h-row'));
    expect(highlightedRow.length).toBe(2);
  }));
});
