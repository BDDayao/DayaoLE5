import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Post {
  id?: number;
  title: string;
  body: string;
}

@Component({
  selector: 'app-list-posts',
  templateUrl: './list-posts.component.html',
  styleUrls: ['./list-posts.component.css']
})
export class ListPostsComponent {
  posts?: Post[] = [];

  constructor(private http: HttpClient) { }
}
