import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { Environment } from '../ergast.module';
import { StandingsTable, ErgastGetResponse, RaceTable } from '../interfaces';

@Injectable({
  providedIn: 'root',
})
export class ErgastApiService {
  constructor(
    private http: HttpClient,
    @Inject('env') private env: Environment
  ) {}

  getAllYearWinners(offset = 55, limit = 30): Observable<StandingsTable> {
    return this.http
      .get<ErgastGetResponse<StandingsTable>>(
        `${this.env.apiUrl}/driverstandings/1.json`,
        { params: { offset, limit } }
      )
      .pipe(map((response) => response.MRData));
  }

  getRaceWinnersByYear(year: string): Observable<RaceTable> {
    return this.http
      .get<ErgastGetResponse<RaceTable>>(
        `${this.env.apiUrl}/${year}/results/1.json`
      )
      .pipe(map((response) => response.MRData));
  }
}
