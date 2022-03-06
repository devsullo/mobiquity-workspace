import { APP_BASE_HREF } from '@angular/common';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  ErgastApiService,
  ErgastApiServiceMock,
  FirstStanding,
  raceTableMockData,
  SingleRace,
  standingsTableMockData,
} from '@mobiquity-workspace/ergast';
import { AppRoutingModule } from '../../app-routing.module';
import { SharedModule } from '../../shared/shared.module';

import { WinnersOfYearComponent } from './winners-of-year.component';

describe('WinnersOfYearComponent', () => {
  let component: WinnersOfYearComponent;
  let fixture: ComponentFixture<WinnersOfYearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppRoutingModule, SharedModule],
      providers: [
        {
          provide: ErgastApiService,
          useClass: ErgastApiServiceMock,
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
      declarations: [WinnersOfYearComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WinnersOfYearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should set input data correctly',
    waitForAsync(async () => {
      component.data?.subscribe((data) => {
        const expectedData = {
          races: raceTableMockData.RaceTable.Races.map(
            (r) => new SingleRace(r)
          ),
          raceWinner: standingsTableMockData.StandingsTable.StandingsLists.map(
            (s) => new FirstStanding(s)
          ),
        };
        expect(data).toEqual(expectedData);
      });
    })
  );
});
