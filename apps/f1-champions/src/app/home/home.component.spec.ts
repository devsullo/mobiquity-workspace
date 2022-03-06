import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import {
  ErgastApiService,
  ErgastApiServiceMock,
  FirstStanding,
  standingsTableMockData,
} from '@mobiquity-workspace/ergast';
import { AppRoutingModule } from '../app-routing.module';
import { SharedModule } from '../shared/shared.module';
import { APP_BASE_HREF } from '@angular/common';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SharedModule, AppRoutingModule],
      providers: [
        {
          provide: ErgastApiService,
          useClass: ErgastApiServiceMock,
        },
        { provide: APP_BASE_HREF, useValue: '/' },
      ],
      declarations: [HomeComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(
    'should set firstStandings input correctly',
    waitForAsync(async () => {
      component.firstStandings?.subscribe((data) => {
        const expectedData =
          standingsTableMockData.StandingsTable.StandingsLists.map(
            (s) => new FirstStanding(s)
          );
        expect(data).toEqual(expectedData);
      });
    })
  );
});
