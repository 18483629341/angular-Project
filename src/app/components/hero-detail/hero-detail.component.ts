import { Component, OnInit } from '@angular/core';
import {Router,ActivatedRoute,Params} from '@angular/router'
import { UserService } from "../../user.service";

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  hero:Object={'id':15,'name':'Lisa'}
  id:number;
  constructor(
    public userService:UserService,
    private route:ActivatedRoute,
    private router:Router
  ) {
   
    this.route.params.subscribe((params:Params)=>{
      console.log(params.id);
      this.id=params.id;
     
    })
   }

  ngOnInit() {
   // console.log(this.hero);
  }
  showSingle(id){
   //this.userService.getSingleUser(id).subscribe(res=>{
    // console.log();
     //this.user=
  }
  }
}
