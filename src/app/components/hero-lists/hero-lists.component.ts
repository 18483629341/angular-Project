import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero-lists',
  templateUrl: './hero-lists.component.html',
  styleUrls: ['./hero-lists.component.css']
})
export class HeroListsComponent implements OnInit {
  heroes=[{'id':12,'name':"Mr. Nice"},
          {'id':13,'name':"Mr. Nice"},
          {'id':14,'name':"Mr. Nice"},
          {'id':15,'name':"Mr. Nice"}
        ]
  constructor() { }

  ngOnInit() {
  }

}