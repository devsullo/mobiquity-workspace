import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { F1ChampionsRootComponent } from './app-root.component';
import { ErgastModule } from '@mobiquity-workspace/ergast';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [F1ChampionsRootComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    ErgastModule.forRoot({
      apiUrl: environment.ergastApiUrl,
    }),
  ],
  providers: [],
  bootstrap: [F1ChampionsRootComponent],
})
export class AppModule {}
