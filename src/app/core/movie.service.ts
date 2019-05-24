import {Injectable} from '@angular/core';
import {Observable} from 'rxjs';
import {Movie} from './models';
import {MOVIE} from './app-url';
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MovieService {

    constructor(private _client: HttpClient) {
    }

    getMovies(search?: string): Observable<Movie[]> {
        return this._client.get<Movie[]>(MOVIE, {params: {search: search}});
    }
}
