import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
  private firstObservSubs = new Subscription();

  constructor() {}

  ngOnInit() {
    // this.firstObservSubs = interval(1000).subscribe((count) => {
    //   console.log(count);
    // });
    const customObservable = Observable.create((observer: any) => {
      let count = 0;
      setInterval((handler: any) => {
        observer.next(count);
        if (count === 5) {
          observer.complete();
        }
        if (count > 3) {
          observer.error(new Error('count is greater than 4!'));
        }
        count++;
      }, 1000);
    });

    this.firstObservSubs = customObservable
      .pipe(
        filter((data: number) => {
          return data > 0;
        }),
        map((data: number) => {
          return 'Round ' + (data + 1);
        })
      )
      .subscribe(
        (data: any) => {
          console.log(data);
        },
        (error: any) => {
          console.log(error);
          alert(error.message);
        },
        () => {
          console.log('Completed');
        }
      );
  }
  ngOnDestroy(): void {
    this.firstObservSubs.unsubscribe();
  }
}
