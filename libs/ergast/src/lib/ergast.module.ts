import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErgastApiService } from './services/ergast-api.service';
import { StandingsListsComponent } from './components/standings-lists/standings-lists.component';
import { RouterModule } from '@angular/router';

export interface Environment {
  apiUrl: string;
}

@NgModule({
  imports: [CommonModule, HttpClientModule, RouterModule],
  declarations: [StandingsListsComponent],
  exports: [StandingsListsComponent],
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
