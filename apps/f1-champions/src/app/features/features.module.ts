import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WinnersOfYearComponent } from './winners-of-year/winners-of-year.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'winners-of-year/:year', component: WinnersOfYearComponent },
  { path: '**', redirectTo: '' },
];
@NgModule({
  declarations: [WinnersOfYearComponent],
  imports: [CommonModule, RouterModule.forChild(routes)],
})
export class FeaturesModule {}
