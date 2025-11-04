import { Routes } from '@angular/router';
import { ListPostsComponent } from './components/list-posts/list-posts.component';

export const routes: Routes = [
  { path: '', component: ListPostsComponent },
  { path: 'list-posts', component: ListPostsComponent }
];
