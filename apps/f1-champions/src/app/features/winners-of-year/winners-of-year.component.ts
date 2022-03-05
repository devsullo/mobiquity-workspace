import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ErgastApiService, SingleRace } from '@mobiquity-workspace/ergast';
import { map, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'f1-champions-winners-of-year',
  templateUrl: './winners-of-year.component.html',
  styleUrls: ['./winners-of-year.component.scss'],
})
export class WinnersOfYearComponent implements OnInit {
  public races?: Observable<SingleRace[]>;
  public year?: string;
  constructor(
    private ergastApiService: ErgastApiService,
    private route: ActivatedRoute,
    public location: Location
  ) {}

  ngOnInit(): void {
    this.year = this.route.snapshot.paramMap.get('year') || '';
    this.races = this.ergastApiService
      .getRaceWinnersByYear(this.year)
      .pipe(map((r) => r.RaceTable.Races.map((race) => new SingleRace(race))));
  }
}
