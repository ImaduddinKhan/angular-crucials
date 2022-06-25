import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  constructor(private http: HttpClient) {}

  createPost(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe((resposeData) => {
        console.log(resposeData);
      });
  }

  getPosts() {
    return this.http
      .get(
        'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
      )
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          for (const key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    );
  }
}
