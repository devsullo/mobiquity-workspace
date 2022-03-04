import { NgModule } from '@angular/core';
import { WinnersOfYearComponent } from './winners-of-year/winners-of-year.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from '../shared/shared.module';

const routes: Routes = [
  { path: 'winners-of-year/:year', component: WinnersOfYearComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [WinnersOfYearComponent],
  imports: [SharedModule, RouterModule.forChild(routes)],
})
export class FeaturesModule {}
