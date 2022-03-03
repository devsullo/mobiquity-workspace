import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
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

  getAllYearWinners(): Observable<ErgastGetResponse<StandingsTable>> {
    return this.http.get<ErgastGetResponse<StandingsTable>>(
      `${this.env.apiUrl}/driverstandings/1.json`
    );
  }

  getRaceWinnersByYear(year: string): Observable<ErgastGetResponse<RaceTable>> {
    return this.http.get<ErgastGetResponse<RaceTable>>(
      `${this.env.apiUrl}/${year}/results/1.json`
    );
  }
}
