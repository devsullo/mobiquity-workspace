import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErgastApiService } from './services/ergast-api.service';
import { StandingsListsComponent } from './components/standings-lists/standings-lists.component';
import { RouterModule } from '@angular/router';
import { RaceListsComponent } from './components/race-lists/race-lists.component';
import { TableModule } from 'primeng/table';
import { FlagComponent } from './components/flag/flag.component';
import { ConstructorComponent } from './components/constructor/constructor.component';
import { LoaderComponent } from './components/loader/loader.component';

export interface Environment {
  apiUrl: string;
}

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule, TableModule],
  declarations: [
    StandingsListsComponent,
    RaceListsComponent,
    FlagComponent,
    ConstructorComponent,
    LoaderComponent,
  ],
  exports: [StandingsListsComponent, RaceListsComponent],
})
export class ErgastModule {
  public static forRoot(environment: Environment) {
    return {
      ngModule: ErgastModule,
      providers: [
        ErgastApiService,
        {
          provide: 'env',
          useValue: environment,
        },
      ],
    };
  }
}
