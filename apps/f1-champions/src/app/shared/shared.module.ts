import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErgastModule } from '@mobiquity-workspace/ergast';
import { environment } from '../../environments/environment';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ErgastModule.forRoot({
      apiUrl: environment.ergastApiUrl,
    }),
  ],
  exports: [ErgastModule],
})
export class SharedModule {}
