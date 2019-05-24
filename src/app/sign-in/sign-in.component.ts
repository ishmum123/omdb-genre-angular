import {Component, OnInit} from '@angular/core';
import {AuthService as SocialAuthService, GoogleLoginProvider} from 'angularx-social-login';
import {Router} from '@angular/router';
import {AuthService} from '../core/auth.service';

@Component({
    selector: 'app-sign-in',
    templateUrl: './sign-in.component.html'
})
export class SignInComponent implements OnInit {

    test: Date = new Date();
    focus;
    focus1;

    constructor(private _socialAuthService: SocialAuthService,
                private _authService: AuthService,
                private _router: Router) {
    }

    ngOnInit() {
    }

    loginWithGoogle() {
        this._socialAuthService.signIn(GoogleLoginProvider.PROVIDER_ID)
            .then(userData => {
                // on success
                // this will return user data from google. What you need is a user token which you will send it to the server
                // this.sendToRestApiMethod(userData.idToken);
                console.log(userData);
            }, error => {
            });
    }

    login(email: string, password: string) {
        this._authService.signIn(email, password)
            .subscribe(_ => {
                this._router.navigate(['dashboard']);
            }, _ => {
            });
    }
}
