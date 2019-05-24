import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {Observable} from 'rxjs';
import {AuthService} from './auth.service';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(private _authService: AuthService,
                private _router: Router) {
    }

    canActivate(_: ActivatedRouteSnapshot,
                state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
        if (this._authService.isLoggedIn()) {
            if (state.url === '/home') {
                return true;
            } else {
                this._router.navigate(['home']);
                return false;
            }
        } else if (state.url !== '/sign-in') {
            this._router.navigate(['sign-in']);
            return false;
        } else {
            return true;
        }
    }
}
