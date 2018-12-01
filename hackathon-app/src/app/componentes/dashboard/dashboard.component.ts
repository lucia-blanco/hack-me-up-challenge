import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';
import { AngularFireDatabase } from '@angular/fire/database';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  nombre;
  fecha;
  sitio;
  tecnologia;
  hackathones;
  user;

  constructor(private fbS: FirebaseService,
    private router: Router,
    public aFDb: AngularFireDatabase) {

    fbS.currentUserObservable.subscribe(user => {
      this.aFDb.object('/usuario/' + user.uid).valueChanges().subscribe(data => {
        console.log(data);
        this.user = data;
      });
    });

    this.aFDb.object('/hackathon/').valueChanges().subscribe(data => {
      console.log(data);
      this.hackathones = data;
    });

  }

  ngOnInit() {
  }

  crearHackathon() {
    this.fbS.createHackathon(this.nombre, this.fecha, this.sitio, this.tecnologia);
  }

}
