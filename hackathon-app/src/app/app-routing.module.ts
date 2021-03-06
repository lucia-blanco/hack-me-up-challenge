import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { HackathonComponent } from './componentes/hackathon/hackathon.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { RankingComponent } from './componentes/ranking/ranking.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: '', component: DashboardComponent },
  { path: 'hackathon/:hackathon', component: HackathonComponent },
  { path: 'ranking', component: RankingComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
