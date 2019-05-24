import {Injectable} from '@angular/core';
import {CookieService} from 'ngx-cookie-service';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from './models';
import {HttpClient} from '@angular/common/http';
import {USER} from './app-url';
import {filter} from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private _cookieService: CookieService,
                private _client: HttpClient) {
    }

    isLoggedIn(): boolean {
        return !!this._cookieService.get('authorised');
    }

    signIn(email: string, password: string): Observable<User> {
        const subject = new BehaviorSubject<User>(null);
        const _subject = subject.pipe(filter(result => !!result));
        this._client.get<User>(`${USER}/sign-in/${email}/${password}`)
            .subscribe(result => {
                this._cookieService.set('authorised', 'true');
                subject.next(result);
            }, error => subject.error(error));
        return _subject;
    }
}
