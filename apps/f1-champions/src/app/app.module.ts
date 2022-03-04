import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { F1ChampionsRootComponent } from './app-root.component';
import { ErgastModule } from '@mobiquity-workspace/ergast';
import { environment } from '../environments/environment';
import { HomeComponent } from './home/home.component';
import { FeaturesModule } from './features/features.module';

@NgModule({
  declarations: [F1ChampionsRootComponent, HomeComponent],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    FeaturesModule,
    ErgastModule.forRoot({
      apiUrl: environment.ergastApiUrl,
    }),
  ],
  providers: [],
  bootstrap: [F1ChampionsRootComponent],
})
export class AppModule {}
