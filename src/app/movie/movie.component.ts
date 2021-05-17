import { Component, OnInit ,Input} from '@angular/core';
import {Movie} from '../app.model';
import { ActivatedRoute,Router } from '@angular/router';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {
    @Input() movie:Movie;
  constructor(private route:ActivatedRoute,private router:Router) { }

  ngOnInit(): void {
    console.log('movieComponent',this.movie)
  }
}
