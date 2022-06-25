import {
  HttpClient,
  HttpEventType,
  HttpHeaders,
  HttpParams,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject, throwError } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
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
        postData,
        {
          observe: 'response',
          responseType: 'json',
        }
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
    let searchParams = new HttpParams();
    searchParams = searchParams.append('print', 'pretty'); // These params prints the response in pretty style
    searchParams = searchParams.append('custom', 'key'); //These ara not supported by firebase, its just example of multi params
    return this.http
      .get<{ [key: string]: Post }>(
        'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Bismillah' }),
          params: searchParams,
          responseType: 'json',
        }
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
    return this.http
      .delete(
        'https://ng-restful-guide-default-rtdb.asia-southeast1.firebasedatabase.app/posts.json',
        {
          observe: 'events',
          responseType: 'text',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if (event.type === HttpEventType.Response) {
            console.log(event.body);
          }
        })
      );
  }
}
