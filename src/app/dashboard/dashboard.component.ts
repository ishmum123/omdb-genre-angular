import {Component, Input, OnInit} from '@angular/core';
import {MovieService} from '../core/movie.service';
import {Movie} from '../core/models';
import {NgbActiveModal, NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'app-movie-modal-content',
    template: `
        <div class="modal-header">
            <h5 class="modal-title text-center">{{movie.Title}}</h5>
            <button type="button" class="close" aria-label="Close" (click)="activeModal.dismiss('Cross click')">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="modal-body">

            <strong>Title: </strong> {{movie.Title}} <br/>
            <strong>Year: </strong> {{movie.Year}} <br/>
            <strong>Rated: </strong> {{movie.Rated}} <br/>
            <strong>Released: </strong> {{movie.Released}} <br/>
            <strong>Runtime: </strong> {{movie.Runtime}} <br/>
            <strong>Genre: </strong> {{movie.Genre}} <br/>
            <strong>Director: </strong> {{movie.Director}} <br/>
            <strong>Writer: </strong> {{movie.Writer}} <br/>
            <strong>Actors: </strong> {{movie.Actors}} <br/>
            <strong>Plot: </strong> {{movie.Plot}} <br/>
            <strong>Language: </strong> {{movie.Language}} <br/>
            <strong>Country: </strong> {{movie.Country}} <br/>
            <strong>Awards: </strong> {{movie.Awards}} <br/>
            <strong>Ratings: </strong> {{movie.Ratings}} <br/>
            <strong>Metascore: </strong> {{movie.Metascore}} <br/>
            <strong>imdbRating: </strong> {{movie.imdbRating}} <br/>
            <strong>imdbVotes: </strong> {{movie.imdbVotes}} <br/>
            <strong>imdbID: </strong> {{movie.imdbID}} <br/>
            <strong>Type: </strong> {{movie.Type}} <br/>
            <strong>DVD: </strong> {{movie.DVD}} <br/>
            <strong>BoxOffice: </strong> {{movie.BoxOffice}} <br/>
            <strong>Production: </strong> {{movie.Production}} <br/>
            <strong>Website: </strong> {{movie.Website}} <br/>
            <strong>Response: </strong> {{movie.Response}} <br/>

        </div>
        <div class="modal-footer">
            <div class="right-side">
                <button type="button" class="btn btn-danger btn-link" (click)="activeModal.close('Close click')">
                    OK
                </button>
            </div>
        </div>
    `
})
export class MovieModalContentComponent {

    @Input() movie: Movie;

    constructor(public activeModal: NgbActiveModal) {
    }
}


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

    movies: Movie[];

    constructor(private _movieService: MovieService,
                private _modalService: NgbModal) {
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

    openMovieDetailModal(movie: Movie) {
        const modalRef = this._modalService.open(MovieModalContentComponent);
        modalRef.componentInstance.movie = movie;
    }
}
