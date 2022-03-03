import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WinnersOfYearComponent } from './features/winners-of-year/winners-of-year.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'winners-of-year', component: WinnersOfYearComponent },
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
