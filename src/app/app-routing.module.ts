import { NgModule } from '@angular/core';
import { RouterModule,Routes } from '@angular/router';
//import { listComponent } from './components/list/list.component';

const routes:Routes=[
  //{path:"list",component:listComponent}
]
@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {

 }
