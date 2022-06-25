import { Component, OnDestroy, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Post } from './post.model';
import { PostsService } from './posts.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy {
  loadedPosts: Post[] = [];
  fetchingPosts = false;
  error = null;
  private errsub: Subscription;

  constructor(private http: HttpClient, private postService: PostsService) {}

  ngOnInit() {
    this.errsub = this.postService.error.subscribe((error) => {
      this.fetchingPosts = false;
      this.error = error;
    });
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
    this.postService.getPosts().subscribe(
      (posts) => {
        this.fetchingPosts = false;
        this.loadedPosts = posts;
      },
      (error) => {
        this.fetchingPosts = false;
        this.error = error.message;
      }
    );
  }

  onClearPosts() {
    // Send Http request
    this.postService.deletePosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleError() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errsub.unsubscribe();
  }
}
