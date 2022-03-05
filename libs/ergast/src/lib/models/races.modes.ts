import {
  Constructor,
  Driver,
  FastestLap,
  Race,
  RaceResult,
} from '../interfaces';

export class SingleRace {
  public data: Race;
  constructor(data: Race) {
    this.data = data;
  }

  get results(): RaceResult {
    return this.data.Results[0];
  }

  get driver(): Driver {
    return this.results.Driver;
  }

  get driverConstructor(): Constructor {
    return this.results.Constructor;
  }

  get time(): string {
    return this.results.Time.time;
  }

  get fastestLap(): FastestLap {
    return this.results.FastestLap;
  }

  get driverFullName(): string {
    return `${this.driver.givenName} ${this.driver.familyName}`;
  }
}
