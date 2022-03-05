import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ErgastModule } from '@mobiquity-workspace/ergast';
import { environment } from '../../environments/environment';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CoreModule } from '@mobiquity-workspace/core';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ErgastModule.forRoot({
      apiUrl: environment.ergastApiUrl,
    }),
    CoreModule,
  ],
  exports: [ErgastModule, ButtonModule, CoreModule],
})
export class SharedModule {}
