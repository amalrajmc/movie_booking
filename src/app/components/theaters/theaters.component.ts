  import { Component, OnInit,Input } from '@angular/core';
import { Theatre } from 'src/app/app.model';

@Component({
  selector: 'app-theaters',
  templateUrl: './theaters.component.html',
  styleUrls: ['./theaters.component.scss']
})
export class TheatersComponent implements OnInit {
 
    @Input()theatres:Array<Theatre>;
    @Input()movie_id:string;

  constructor() { }

  ngOnInit(): void {
  }

}
