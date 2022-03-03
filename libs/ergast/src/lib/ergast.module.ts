import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErgastApiService } from './services/api.service';

export interface Environment {
  apiUrl: string;
}

@NgModule({
  imports: [CommonModule, HttpClientModule],
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
