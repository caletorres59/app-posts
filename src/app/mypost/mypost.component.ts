import { Component, OnInit } from '@angular/core';
import { posts } from './post.mucks';
import { Posters } from './post.interface';

@Component({
  selector: 'app-mypost',
  templateUrl: './mypost.component.html',
  styleUrls: ['./mypost.component.css']
})
export class MypostComponent implements OnInit {
  
  postersu = posts;

  removePost(id)
  {
this.postersu.splice(id,1);

  }
 
  constructor() { console.log(); }

  ngOnInit() {
  }

}
