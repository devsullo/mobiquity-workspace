import { Component, OnInit } from '@angular/core';
import {
  ErgastApiService,
  SingleRace,
  FirstStanding,
  RaceListsDataType,
} from '@mobiquity-workspace/ergast';
import { forkJoin, map } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'f1-champions-winners-of-year',
  templateUrl: './winners-of-year.component.html',
  styleUrls: ['./winners-of-year.component.scss'],
})
export class WinnersOfYearComponent implements OnInit {
  public data?: RaceListsDataType;
  public year = '';
  constructor(
    private ergastApiService: ErgastApiService,
    private route: ActivatedRoute,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.year = this.route.snapshot.paramMap.get('year') || '';
    this.getRacesAndWinner();
  }

  getRacesAndWinner() {
    // Using forkJoin to join 2 observables and return object
    const races = this.ergastApiService
      .getRaceWinnersByYear(this.year)
      .pipe(map((r) => r.RaceTable.Races.map((race) => new SingleRace(race))));

    const raceWinner = this.ergastApiService
      .getYearWinner(this.year)
      .pipe(
        map((r) =>
          r.StandingsTable.StandingsLists.map((s) => new FirstStanding(s))
        )
      );

    this.data = forkJoin({
      races,
      raceWinner,
    });
  }
}
