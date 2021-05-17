import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MovieListingComponent } from './movie-listing/movie-listing.component';
import { MovieComponent } from './movie/movie.component';
import { AppRoutingModule } from './app-routing.module';
import { MovieDescriptionComponent } from './movie-description/movie-description.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { TheatersComponent } from './components/theaters/theaters.component';
import { SeatSelectionComponent } from './seat-selection/seat-selection.component';
import {AngularFirestoreModule} from '@angular/fire/firestore'
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { BookingReducer } from './store/booking.reducer';
import { BookingEffects } from './store/booking.effects';
import { Store } from '@ngrx/store';
import { StoreModule } from '@ngrx/store';
import {HttpClientModule} from '@angular/common/http'
import { FormsModule } from '@angular/forms';
import { movieFilterPipe } from './movie-filter.pipe';
@NgModule({
  declarations: [
    AppComponent,
    MovieListingComponent,
    MovieComponent,
    MovieDescriptionComponent,
    BreadcrumbComponent,
    TheatersComponent,
    SeatSelectionComponent,
    movieFilterPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    HttpClientModule,
    StoreModule.forRoot({bookings: BookingReducer}),
    EffectsModule.forRoot([BookingEffects]),
  
  ],
  providers: [Store],
  bootstrap: [AppComponent]
})
export class AppModule { }
