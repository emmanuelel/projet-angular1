import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {


  authStatus: boolean = false;


  constructor(private authService:AuthService,private router : Router) { }

  ngOnInit(){
  this.authStatus = this.authService.isAuth;
  }
 onSignIn(){
   this.authService.signIn().then(
          () => {
            this.authStatus = this.authService.isAuth;
            this.router.navigate( ["appareil"]);
          }
         );
        }
  onSignOut() {
    console.log("deconnexion");
    this.authService.signOut();
    this.authStatus = this.authService.isAuth;

  }
}
