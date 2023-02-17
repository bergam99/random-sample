import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AbsentsComponent } from './pages/absents/absents.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path : "",
    component: HomeComponent
  },
  {
    path : "absent",
    component : AbsentsComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}


