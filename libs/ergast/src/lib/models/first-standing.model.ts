import {
  Constructor,
  Driver,
  DriverStandings,
  StandingsLists,
} from '../interfaces';

export class FirstStanding {
  public data: StandingsLists;
  constructor(data: StandingsLists) {
    this.data = data;
  }

  get season(): string {
    return this.data.season;
  }

  get standings(): DriverStandings {
    return this.data.DriverStandings[0];
  }

  get driver(): Driver {
    return this.standings.Driver;
  }

  get driverConstructor(): Constructor {
    return this.standings.Constructors[0];
  }
}
