import { of } from 'rxjs';

export class ErgastApiServiceMock {
  getRaceWinnersByYear() {
    return of(raceTableMockData);
  }
  getYearWinner() {
    return of(standingsTableMockData);
  }
  getAllYearWinners() {
    return of(standingsTableMockData);
  }
}

export const raceTableMockData = {
  RaceTable: {
    season: '2008',
    position: '1',
    Races: [
      {
        season: '2008',
        round: '1',
        url: 'http://en.wikipedia.org/wiki/2008_Australian_Grand_Prix',
        raceName: 'Australian Grand Prix',
        Circuit: {
          circuitId: 'albert_park',
          url: 'http://en.wikipedia.org/wiki/Melbourne_Grand_Prix_Circuit',
          circuitName: 'Albert Park Grand Prix Circuit',
          Location: {
            lat: '-37.8497',
            long: '144.968',
            locality: 'Melbourne',
            country: 'Australia',
          },
        },
        date: '2008-03-16',
        time: '04:30:00Z',
        Results: [
          {
            number: '22',
            position: '1',
            positionText: '1',
            points: '10',
            Driver: {
              driverId: 'hamilton',
              permanentNumber: '44',
              code: 'HAM',
              url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
              givenName: 'Lewis',
              familyName: 'Hamilton',
              dateOfBirth: '1985-01-07',
              nationality: 'British',
            },
            Constructor: {
              constructorId: 'mclaren',
              url: 'http://en.wikipedia.org/wiki/McLaren',
              name: 'McLaren',
              nationality: 'British',
            },
            grid: '1',
            laps: '58',
            status: 'Finished',
            Time: {
              millis: '5690616',
              time: '1:34:50.616',
            },
            FastestLap: {
              rank: '2',
              lap: '39',
              Time: {
                time: '1:27.452',
              },
              AverageSpeed: {
                units: 'kph',
                speed: '218.300',
              },
            },
          },
        ],
      },
      {
        season: '2008',
        round: '9',
        url: 'http://en.wikipedia.org/wiki/2008_British_Grand_Prix',
        raceName: 'British Grand Prix',
        Circuit: {
          circuitId: 'silverstone',
          url: 'http://en.wikipedia.org/wiki/Silverstone_Circuit',
          circuitName: 'Silverstone Circuit',
          Location: {
            lat: '52.0786',
            long: '-1.01694',
            locality: 'Silverstone',
            country: 'UK',
          },
        },
        date: '2008-07-06',
        time: '12:00:00Z',
        Results: [
          {
            number: '22',
            position: '1',
            positionText: '1',
            points: '10',
            Driver: {
              driverId: 'hamilton',
              permanentNumber: '44',
              code: 'HAM',
              url: 'http://en.wikipedia.org/wiki/Lewis_Hamilton',
              givenName: 'Lewis',
              familyName: 'Hamilton',
              dateOfBirth: '1985-01-07',
              nationality: 'British',
            },
            Constructor: {
              constructorId: 'mclaren',
              url: 'http://en.wikipedia.org/wiki/McLaren',
              name: 'McLaren',
              nationality: 'British',
            },
            grid: '4',
            laps: '60',
            status: 'Finished',
            Time: {
              millis: '5949440',
              time: '1:39:09.440',
            },
            FastestLap: {
              rank: '3',
              lap: '16',
              Time: {
                time: '1:32.817',
              },
              AverageSpeed: {
                units: 'kph',
                speed: '199.398',
              },
            },
          },
        ],
      },
    ],
  },
};

export const standingsTableMockData = {
  StandingsTable: {
    driverStandings: '1',
    StandingsLists: [
      {
        season: '1950',
        round: '7',
        DriverStandings: [
          {
            position: '1',
            positionText: '1',
            points: '30',
            wins: '3',
            Driver: {
              driverId: 'farina',
              url: 'http://en.wikipedia.org/wiki/Nino_Farina',
              givenName: 'Nino',
              familyName: 'Farina',
              dateOfBirth: '1906-10-30',
              nationality: 'Italian',
            },
            Constructors: [
              {
                constructorId: 'alfa',
                url: 'http://en.wikipedia.org/wiki/Alfa_Romeo_in_Formula_One',
                name: 'Alfa Romeo',
                nationality: 'Swiss',
              },
            ],
          },
        ],
      },
    ],
  },
};
