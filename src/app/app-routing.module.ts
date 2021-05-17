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
        RouterModule.forRoot(appRoutes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule {

constructor(router:Router) {
  router.events.forEach((event) => {
    if(event instanceof RoutesRecognized) {
      console.log("route",event)
    }
    // NavigationEnd
    // NavigationCancel
    // NavigationError
    // RoutesRecognized
  });
}
}