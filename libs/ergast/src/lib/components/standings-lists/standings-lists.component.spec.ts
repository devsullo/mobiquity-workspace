import {
  ComponentFixture,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';

import { StandingsListsComponent } from './standings-lists.component';
import { RouterTestingModule } from '@angular/router/testing';
import { Router } from '@angular/router';
import { standingsTableMockData } from '../../mocks';
import { FirstStanding } from '../../models/first-standing.model';
import { of } from 'rxjs';
import { ChangeDetectorRef } from '@angular/core';
import { ErgastModule } from '../../ergast.module';
import { RaceListsComponent } from '../race-lists/race-lists.component';

describe('StandingsListsComponent', () => {
  let component: StandingsListsComponent;
  let fixture: ComponentFixture<StandingsListsComponent>;
  let router: Router;
  let changeDetectorRef: ChangeDetectorRef;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes([
          { path: 'winners-of-year/:year', component: RaceListsComponent },
        ]),
        ErgastModule,
      ],
      declarations: [],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StandingsListsComponent);
    component = fixture.componentInstance;
    changeDetectorRef =
      fixture.debugElement.injector.get<ChangeDetectorRef>(ChangeDetectorRef);
    router = TestBed.inject(Router);
    component.firstStandings = of([
      new FirstStanding(
        standingsTableMockData.StandingsTable.StandingsLists[0]
      ),
    ]);
    changeDetectorRef.detectChanges();
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to winners-of-year route with right path', fakeAsync(() => {
    const routerSpy = jest.spyOn(router, 'navigate');
    const button = fixture.debugElement.nativeElement.querySelector('tr');
    const buttonSpy = jest.spyOn(button, 'click');
    button.click();
    tick();

    expect(buttonSpy).toHaveBeenCalled();
    expect(routerSpy).toBeCalledWith(['winners-of-year', '1950']);
  }));
});
