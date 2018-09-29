import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-hero-home',
  templateUrl: './hero-home.component.html',
  styleUrls: ['./hero-home.component.css']
})
export class HeroHomeComponent implements OnInit {
  lists:string[]=['Narco','Bombasto','Celeritas','Magneta'];
  constructor() { }

  ngOnInit() {
  }

}
