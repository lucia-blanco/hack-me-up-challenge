// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyCHe_2P5iWV28fxqJ0BfH91DxTbGoGFHS4',
    authDomain: 'challenge-aad5b.firebaseapp.com',
    databaseURL: 'https://challenge-aad5b.firebaseio.com',
    projectId: 'challenge-aad5b',
    storageBucket: 'challenge-aad5b.appspot.com',
    messagingSenderId: '736651861630'
  },
  userNode: 'usuario',
  hackathonNode: 'hackathon',
  participantesNode: 'participantes',
  tallerNode: 'taller'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
