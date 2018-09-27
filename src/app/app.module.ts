import { BrowserModule } from '@angular/platform-browser';

import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { HeroHomeComponent } from './components/hero-home/hero-home.component';
import { HeroListsComponent } from './components/hero-lists/hero-lists.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroHomeComponent,
    HeroListsComponent
  ],
  imports: [
    BrowserModule,
    //NgbModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
