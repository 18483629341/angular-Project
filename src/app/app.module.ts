import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
  //ngModul 使用必须引入  FormsModule
import {RouterModule,Routes}  from '@angular/router';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { HeroListsComponent } from './components/hero-lists/hero-lists.component';
import { AppRoutingModule } from './app-routing.module';
import { ListComponent } from './components/list/list.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';

const appRoutes:Routes=[
  //  {path:'',component:HeroHomeComponent},
   {path:'home',component:HeroHomeComponent},
   {path:'detail/:id',component:HeroDetailComponent},
   {path:'lists',component:HeroListsComponent},
   
]
@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroHomeComponent,
    HeroListsComponent,
    ListComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
