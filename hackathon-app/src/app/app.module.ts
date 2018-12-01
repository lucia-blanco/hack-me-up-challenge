import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';
import { environment } from '../environments/environment';

import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireDatabaseModule } from '@angular/fire/database';

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
    LandingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
