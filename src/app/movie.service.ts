import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


import { Movie } from './movie';
import { MessageService } from './message.service';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class MovieService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  private moviesUrl = 'api/movies';


  getMovies(): Observable<Movie[]> {
    return this.http.get<Movie[]>(this.moviesUrl)
      .pipe(
        tap(movies => this.log(`fetched movies`)),
        catchError(this.handleError('getMovies', []))
      );
  }

  getMovieDetails(id: String): Observable<Movie> {
    const url = `${this.moviesUrl}/${id}`;
    return this.http.get<Movie>(url)
    .pipe(
      tap(_ => this.log(`fetched movie id=${id}`)),
      catchError(this.handleError<Movie>(`getMovieDetails id=${id}`))
    );
  }

  updateMovieDetails (movie: Movie): Observable<any> {
    return this.http.put(this.moviesUrl, movie, httpOptions).pipe(
      tap(_ => this.log(`updated movie id=${movie.imdbID}`)),
      catchError(this.handleError<any>('updateMovie'))
    );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.addToLog('MovieService: ' + message);
  }

}
