import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { RankingComponent } from './componentes/ranking/ranking.component';
import { HackathonComponent } from './componentes/hackathon/hackathon.component';
import { ParticipantesComponent } from './componentes/participantes/participantes.component';
import { DashboardComponent } from './componentes/dashboard/dashboard.component';
import { LandingComponent } from './componentes/landing/landing.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RankingComponent,
    HackathonComponent,
    ParticipantesComponent,
    DashboardComponent,
    LandingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
