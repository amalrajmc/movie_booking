import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {MovieDescriptionComponent} from './movie-description/movie-description.component';
import {MovieListingComponent} from './movie-listing/movie-listing.component';
import {SeatSelectionComponent} from './seat-selection/seat-selection.component';
  import { from } from 'rxjs';
  import { Router, NavigationStart, NavigationEnd, NavigationError, NavigationCancel, RoutesRecognized } from '@angular/router';


const appRoutes: Routes = [
  { path: '', component:  MovieListingComponent},
    { path: 'description/:id', component:  MovieDescriptionComponent},
    { path: 'seat-selection/:movie_id/:id', component:  SeatSelectionComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(appRoutes,{scrollPositionRestoration: 'enabled'})
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

constructor(router:Router) {
  router.events.forEach((event) => {
    if(event instanceof NavigationEnd) {
      console.log("route",event)
      window.scrollTo(0, 0)
    }
    // setTimeout(()=>{
      
    // },500)
   
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });
}
}