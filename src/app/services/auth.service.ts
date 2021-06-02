import { resolve } from "@angular/compiler-cli/src/ngtsc/file_system";

export class AuthService {

  isAuth = false;

  signIn() {
   return new Promise(
   (resolve,reject) => {
    setTimeout(
             () => {
         this.isAuth = true;
         resolve(true);
        }, 2000
      );
     }
    )
  }
signOut() {
 this.isAuth = false;
 }
}
