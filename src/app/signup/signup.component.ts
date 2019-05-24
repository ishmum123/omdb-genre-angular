import {Component, OnInit} from '@angular/core';
import {AuthService, GoogleLoginProvider} from 'angularx-social-login';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

    test: Date = new Date();
    focus;
    focus1;

    constructor(private _socialAuthService: AuthService) {
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
            }, error => {});
    }
}
