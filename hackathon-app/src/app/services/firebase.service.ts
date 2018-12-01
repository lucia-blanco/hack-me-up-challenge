import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Observable, of } from 'rxjs';
import { switchMap } from 'rxjs/operators';
import { Router } from '@angular/router';

import { Usuario } from './../modelos/usuario';

import * as firebase from 'firebase/app';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})

export class FirebaseService {

  authState = null;
  dbUsuario: Observable<Usuario> = new Observable(null);

  constructor(private afAuth: AngularFireAuth,
    private afDb: AngularFireDatabase,
    private router: Router) {
    // Remembers login
    this.afAuth.authState.subscribe(res => {
      this.authState = res;
    });

    // Gets users data
    this.dbUsuario = this.afAuth.authState.pipe(switchMap(res => {
      if (res) {
        return this.afDb.object<Usuario>(environment.userNode + '/' + res.uid).valueChanges();
      } else {
        return of(null);
      }
    }));
  }

  // Returns true if user is logged in
  get authenticated(): boolean {
    return this.authState !== null;
  }

  // Returns current user data
  get currentUser(): any {
    return this.authenticated ? this.authState : null;
  }
  get currentUserObservable(): any {
    return this.afAuth.authState;
  }

  // Returns current user UID
  get currentUserId(): string {
    return this.authenticated ? this.authState.uid : '';
  }

  // Returns current user display name or Guest
  get currentUserDisplayName(): string {
    if (this.authState) {
      return this.authState['displayName'] || 'User without a Name';
    }
  }

  /* ****** LOGIN / REGISTRATION / LOGOUT ****** */

  // Registration
  emailReg(email: string, password: string, name: string) {
    return this.afAuth.auth.createUserWithEmailAndPassword(email, password).then((usuario) => {
      this.authState = usuario['user'];
      // console.log(this.authState);
      if (usuario) {
        firebase.auth().currentUser.updateProfile({
          displayName: name,
          photoURL: null
        });
      }
      this.regUserData();
    })
      .catch(error => console.log(error));
  }

  // Login
  emailLogin(email: string, password: string) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password).then((player) => {
      this.authState = player;
      console.log(this.authState);
    })
      .catch(error => console.log(error));
  }

  // Logout
  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
    this.authState = null;
  }

  // Writes user info on database
  regUserData() {
    console.log(this.currentUserId);
    const path = environment.userNode + `/${this.authState.uid}`;
    console.log(path);
    const data = {
      email: this.authState.email,
      totalScore: 0,
      rol: 'usuario'
    };
    this.afDb.object(path).set(data)
      .catch(error => console.log(error));
  }

  createHackathon(nombre, fecha, sitio, tecnologia) {
    const path = environment.hackathonNode;
    console.log(path);
    const data = {
      nombre: nombre,
      fecha: fecha,
      sitio: sitio,
      tecnologia: tecnologia
    };
    const hackathon = this.afDb.list(path).push(data);
    // return hackathon.key;
  }

  createTaller(key, nombre, sitio, ponente) {
    const path = environment.hackathonNode + `/${key}` + environment.tallerNode;
    console.log(path);
    const data = {
      nombre: nombre,
      sitio: sitio,
      ponente: ponente
    };
    const taller = this.afDb.list(path).push(data);
    return taller.key;
  }

  regUserTaller(keyHack, keyTaller) {
    const path = environment.hackathonNode + `/${keyHack}` + environment.tallerNode + `/${keyTaller}`;
    console.log(path);
    const data = {
      id: this.authState.uid,
      name: this.authState.displayName
    };
    console.log(this.authState.displayName);
    this.afDb.object(path).set(data)
      .catch(error => console.log(error));
  }

  regUserHackathon(key) {
    const path = environment.hackathonNode + `/${key}` + environment.participantesNode;
    console.log(path);
    const data = {
      id: this.authState.uid,
      name: this.authState.displayName,
      indScore: 0,
      teamScore: 0,
      tallerScore: 0
    };
    console.log(this.authState.displayName);
    this.afDb.object(path).set(data)
      .catch(error => console.log(error));
  }

  updateUserHackathon(key, uid, indScore, teamScore, tallerScore) {
    const path = environment.hackathonNode +  `/${key}` + environment.participantesNode + `/${uid}`;
    const data = {
      indScore: indScore,
      teamScore: teamScore,
      tallerScore: tallerScore
    };
    this.afDb.object(path).update(data);
    console.log('user hackathon info updated');
  }
}
