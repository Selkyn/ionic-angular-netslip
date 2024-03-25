import { Injectable } from '@angular/core';
import { Auth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, updateProfile } from '@angular/fire/auth'; // Importez également updateProfile depuis '@angular/fire/auth'
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(public auth: Auth) { }


  async register({ email, password }) {
    try {
      const user = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null
    }
  }

  async login({ email, password }) {
    try {
      const user = await signInWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return user;
    } catch (e) {
      return null
    }
  }

  logout() {
    return signOut(this.auth);
  }

}

// register(
//   email: string,
//   username:string,
//   password: string,
// ): Observable<void> {
//   return new Observable<void>((observer) => { // Retournez l'observable
//     createUserWithEmailAndPassword(
//       this.fireAuth,
//       email,
//       password,
//     ).then(response => {
//       // Mettez à jour le profil une fois l'utilisateur enregistré
//       return updateProfile(response.user, {displayName: username}); // Assurez-vous de renvoyer la promesse pour que le then externe puisse l'utiliser
//     }).then(() => {
//       observer.next(); // Émettez une valeur de succès
//       observer.complete(); // Complétez l'observable
//     }).catch(error => {
//       observer.error(error); // Émettez une erreur si une erreur se produit
//     });
//   });
// }


// async registerUser(email: string, password:string) {
//   return await this.FireAuth.createUserWithEmailAndPassword(email, password)
// }

// async loginUser(email:string, password:string){
//   return await this.FireAuth.signInWithEmailAndPassword(email, password)
// }

// async signOut() {
//   return await this.FireAuth.signOut()
// }

