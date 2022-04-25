import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './components/details/details.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  //Route to the home page
  {
    path: '',
    component: HomeComponent,
  },
  //Route to the homepage after search
  {
    path: 'search/:game-search',
    component: HomeComponent,
  },
  //Route to Details page with game ID
  {
    path: 'details/:id',
    component: DetailsComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
