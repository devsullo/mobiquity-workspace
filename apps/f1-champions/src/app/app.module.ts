import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { F1ChampionsRootComponent } from './app-root.component';
import { HomeComponent } from './home/home.component';
import { FeaturesModule } from './features/features.module';
import { SharedModule } from './shared/shared.module';

@NgModule({
  declarations: [F1ChampionsRootComponent, HomeComponent],
  imports: [BrowserModule, AppRoutingModule, FeaturesModule, SharedModule],
  providers: [],
  bootstrap: [F1ChampionsRootComponent],
})
export class AppModule {}
