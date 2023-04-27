import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Post } from '../../models/post';
import { BlogService } from '../../services/blog.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  posts!: Post[];
  categories!: string[];
  recentPosts!: Post[];

  constructor(private blogService: BlogService, private router: Router) { }

  ngOnInit(): void {
    this.blogService.getPosts().subscribe(posts => this.posts = posts);
    this.blogService.getCategories().subscribe(categories => this.categories = categories);
    this.blogService.getRecentPosts().subscribe(recentPosts => this.recentPosts = recentPosts);
  }
}
