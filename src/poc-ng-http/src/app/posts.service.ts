import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();

  constructor(private http: HttpClient) {}

  createPost(title: string, content: string) {
    // Send Http request
    const postData: Post = { title: title, content: content };
    this.http
      .post<{ name: string }>(
        'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        postData
      )
      .subscribe(
        (resposeData) => {
          console.log(resposeData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
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
        }),
        catchError((errorRes) => {
          return throwError(errorRes);
        })
      );
  }

  deletePosts() {
    return this.http.delete(
      'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json'
    );
  }
}
