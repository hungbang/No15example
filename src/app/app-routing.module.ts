import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeroListDetailComponent } from './hero-list-detail/hero-list-detail.component';

const routes: Routes = [

  {
    path: 'hero',
    component: HeroListDetailComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
