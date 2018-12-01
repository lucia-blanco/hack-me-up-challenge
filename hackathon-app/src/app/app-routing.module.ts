import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './componentes/login/login.component';
import { HackathonComponent } from './componentes/hackathon/hackathon.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'hackathon/:hackathon', component: HackathonComponent },
  { path: '**', redirectTo: '', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
