import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { FirebaseService } from '../../services/firebase.service';

@Component({
  selector: 'app-hackathon',
  templateUrl: './hackathon.component.html',
  styleUrls: ['./hackathon.component.scss']
})
export class HackathonComponent implements OnInit {

  nombre;
  fecha;
  sitio;
  tecnologia;

  constructor(private fbS: FirebaseService,
              private router: Router) { }

  ngOnInit() {
  }

  crearHackathon() {
    console.log(this.nombre);
    this.fbS.createHackathon(this.nombre, this.fecha, this.sitio, this.tecnologia);
  }

}
