import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Movie } from './movie';
import { MOVIES } from './mock-movies';
import { MessageService } from './message.service';

@Injectable()
export class MovieService {

  constructor(private messageService: MessageService) { }

  getMovies(): Observable<Movie[]> {
    this.messageService.addToCache('MovieService: fetched data from remote API');
    return of(MOVIES);
  }
  getMovieDetails(id: String): Observable<Movie> {
    this.messageService.addToCache(`MovieService: fetched movie id=${id}`);
    return of(MOVIES.find(movie => movie.imdbID === id));
  }
}
