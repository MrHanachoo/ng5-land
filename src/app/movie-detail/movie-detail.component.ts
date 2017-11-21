import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movie-detail',
  templateUrl: './movie-detail.component.html',
  styleUrls: ['./movie-detail.component.css']
})

export class MovieDetailComponent implements OnInit {

  @Input() movie: Movie;

  constructor(
    private route: ActivatedRoute,
    private movieService: MovieService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getMovieDetails();
  }

  getMovieDetails(): void {
    const imdbID = this.route.snapshot.paramMap.get('id');
    this.movieService.getMovieDetails(imdbID)
      .subscribe(movieDetails => this.movie = movieDetails);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
   this.movieService.updateMovieDetails(this.movie)
     .subscribe(() => this.goBack());
 }
}
