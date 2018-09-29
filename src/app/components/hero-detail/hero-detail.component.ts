import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Object={'id':15,'name':'Lisa'}
 
  constructor(private route:ActivatedRoute,private router:Router) {
    this.route.params.subscribe((params:Params)=>{
      console.log(params);
    })
   }

  ngOnInit() {
    console.log(this.hero);
  }

}
