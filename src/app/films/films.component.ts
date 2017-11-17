import { Component, OnInit } from '@angular/core';
import { Film } from "../film";

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  film: Film = {
    imdbID: "tt0088247",
    title: "The Terminator"
  }

  constructor() { }

  ngOnInit() {
  }

}
