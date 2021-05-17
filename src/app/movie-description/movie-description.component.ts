import { Component, OnInit } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { Movie, MovieState } from '../app.model';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movies.service';
import { Store } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-description',
  templateUrl: './movie-description.component.html',
  styleUrls: ['./movie-description.component.scss'],
})
export class MovieDescriptionComponent implements OnInit {
  id: string;
  bookings:Observable<MovieState>;

  constructor( private route: ActivatedRoute,private movieService: MovieService,private store:Store<AppState>) {


  }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');

    this.movieService.setMovie(this.id);
    this.bookings = this.store.select(state => state.bookings);
    
  }
  abc() {
    // this.Fstore.collection('movies').doc("three").ref.get()
    // .then((doc) => {
    //   if (doc.exists) {
    //     this.Fstore.collection('movies').doc("ad_astra").set(doc.data());

    //   }});
    //this.Fstore.collection('movies').doc("her").set(data);
    // this.Fstore.collection('movies')
    //   .doc('five')
    //   .set({
    //     date: '30 May 2019',
    //     description:'The struggling Kim family sees an opportunity when the son starts working for the wealthy Park family. Soon, all of them find a way to work within the same household and start living a parasitic life.',
    //     poster:'https://images-na.ssl-images-amazon.com/images/I/91l-CofTenL.jpg',
    //     type:'Thriller/Comedy',
    //     name:'Parasite',
    //     time:'2h 12m',
    //       theatre: [
    //       {
    //         id: 1,
    //         name: 'PVR Films',
    //         seat: [
    //           { name: 'a1', status: 'true' },
    //           { name: 'a2', status: 'true' },
    //           { name: 'a3', status: 'true' },
    //           { name: 'b1', status: 'true' },
    //           { name: 'b2', status: 'true' },
    //           { name: 'b3', status: 'true' },
    //           { name: 'c1', status: 'true' },
    //           { name: 'c2', status: 'true' },
    //           { name: 'c3', status: 'true' },
    //         ],
    //       },
    //     ],
    //   });
  }
}
