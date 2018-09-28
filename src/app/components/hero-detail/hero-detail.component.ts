import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Object={'id':15,'name':'Lisa'}

  constructor() { }

  ngOnInit() {
    console.log(this.hero);
  }

}
