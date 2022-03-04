import {
  Constructor,
  Driver,
  FastestLap,
  Race,
  RaceResult,
  Time,
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

  get time(): Time {
    return this.results.Time;
  }

  get fastestLap(): FastestLap {
    return this.results.FastestLap;
  }
}
