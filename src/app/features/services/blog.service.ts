import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../models/post';

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private postsUrl = 'api/posts'; // Replace with your API URL

  constructor(private http: HttpClient) { }

  getPosts(): Observable<Post[]> {
    return this.http.get<Post[]>(this.postsUrl);
  }

  getCategories(): Observable<string[]> {
    // Replace with your API call to get categories
    return new Observable(observer => {
      observer.next(['category1', 'category2', 'category3']);
      observer.complete();
    });
  }

  getRecentPosts(): Observable<Post[]> {
    // Replace with your API call to get recent posts
    return new Observable(observer => {
      observer.next([
        {
          id: 1,
          title: 'Recent post 1',
          content: 'Content of recent post 1',
          author: 'Author 1',
          date: new Date('2022-01-01'),
          category: 'category1'
        },
        {
          id: 2,
          title: 'Recent post 2',
          content: 'Content of recent post 2',
          author: 'Author 2',
          date: new Date('2022-02-01'),
          category: 'category2'
        },
        {
          id: 3,
          title: 'Recent post 3',
          content: 'Content of recent post 3',
          author: 'Author 3',
          date: new Date('2022-03-01'),
          category: 'category3'
        }
      ]);
      observer.complete();
    });
  }
}
