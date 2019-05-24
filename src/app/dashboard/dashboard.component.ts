import {Component, OnInit} from '@angular/core';
import {MovieService} from '../core/movie.service';
import {Movie} from '../core/models';
import {el} from '@angular/platform-browser/testing/src/browser_util';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})

export class DashboardComponent implements OnInit {

    movies: Movie[];

    constructor(private _movieService: MovieService) {
    }

    ngOnInit() {
        this.getMovies();
    }

    private getMovies(search?: string) {
        if (!(search && search.includes(','))) {
            this._movieService.getMovies(search)
                .subscribe(movies => this.movies = movies);
        } else {
            console.log('Must not contain \',\'');
        }
    }
}
