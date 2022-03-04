import { Constructor, Driver, MRData } from '.';

interface DriverStandings {
  position: string;
  positionText: string;
  points: string;
  wins: string;
  Driver: Driver;
  Constructors: Constructor[];
}

export interface StandingsLists {
  season: string;
  round: string;
  DriverStandings: DriverStandings[];
}

export interface StandingsTable extends MRData {
  StandingsTable: {
    driverStandings: string;
    StandingsLists: StandingsLists[];
  };
}
