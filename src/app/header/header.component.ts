import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  title = 'my Angular 5 Land';
  author = 'Mr.Hanachoo'  

  constructor() { }

  ngOnInit() {
  }

}
