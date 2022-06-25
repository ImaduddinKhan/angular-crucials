import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  loadedPosts: Post[] = [];
  fetchingPosts = false;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.fetchingPosts = true;
    this.postService.getPosts().subscribe((posts) => {
      this.fetchingPosts = false;
      this.loadedPosts = posts;
    });
  }

  onCreatePost(postData: Post) {
    // Send Http request
    return this.postService.createPost(postData.title, postData.content);
  }

  onFetchPosts() {
    // Send Http request
    this.fetchPosts();
  }

  private fetchPosts() {
    this.fetchingPosts = true;
    this.postService.getPosts().subscribe((posts) => {
      this.fetchingPosts = false;
      this.loadedPosts = posts;
    });
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }
}
