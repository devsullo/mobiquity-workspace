import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FirstStanding, ErgastApiService } from '@mobiquity-workspace/ergast';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
@Component({
  selector: 'f1-champions-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent implements OnInit {
  public firstStandings?: Observable<FirstStanding[]>;
  constructor(private ergastApiService: ErgastApiService) {}

  ngOnInit(): void {
    this.firstStandings = this.ergastApiService
      .getAllYearWinners()
      .pipe(
        map((r) =>
          r.StandingsTable.StandingsLists.map((s) => new FirstStanding(s))
        )
      );
  }
}
