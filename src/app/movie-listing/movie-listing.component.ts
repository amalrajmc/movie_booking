import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import {map} from 'rxjs/operators';
import {Movie, MovieState} from '../app.model';
import { Store } from '@ngrx/store';
import {AppState} from "../app.state";
import * as BookingActions from '../store/booking.action'

@Component({
  selector: 'app-movie-listing',
  templateUrl: './movie-listing.component.html',
  styleUrls: ['./movie-listing.component.scss']
})
export class MovieListingComponent implements OnInit {
  moviesCollection:AngularFirestoreCollection<Movie>
  movies:Movie[];
  bookings: Observable<MovieState>;
  searchterm:string;

  constructor(private Fstore:AngularFirestore,private store:Store<AppState>) { 
    this.bookings = store.select(state => state.bookings);
    this.bookings.subscribe(data=>{
      console.log('store',data);
    })
    
    // this.Fstore.collection('movies').valueChanges({idField:'id'}).subscribe(movies=>{
    //  this.movies=movies
    //  console.log(movies)
    // });

    //  this.Fstore.collection('movies').snapshotChanges().pipe(map(changes => {
    //   return changes.map(a=>{
    //     const data = a.payload.doc.data() as Movie
    //     data.id = a.payload.doc.id;
    //     return data;
    //   });
    // }));
  }
  // movies=[1,2,3,4,5,6,7]
  ngOnInit(): void {
    this.store.dispatch(new BookingActions.LoadMovies());
  }

}

