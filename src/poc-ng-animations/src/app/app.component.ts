import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('divState', [
      state(
        'normal',
        style({
          'background-color': 'green',
          transform: 'translateX(0)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px)',
        })
      ),
      transition('normal <=> highlighted', animate(300)),
      // transition('highlighted => normal', animate(300)),
    ]),
    trigger('wildState', [
      state(
        'normal',
        style({
          'background-color': 'green',
          transform: 'translateX(0) scale(1)',
        })
      ),
      state(
        'highlighted',
        style({
          backgroundColor: 'blue',
          transform: 'translateX(100px) scale(1)',
        })
      ),
      state(
        'shrunken',
        style({
          backgroundColor: 'green',
          transform: 'translateX(0px) scale(0.5)',
        })
      ),
      transition('normal => highlighted', animate(300)),
      transition('highlighted => normal', animate(800)),
      transition('shrunken <=> *', [
        style({
          'background-color': 'orange',
        }),
        animate(
          1000,
          style({
            borderRadius: '50px',
          })
        ),
        // animate(2000),
      ]),
    ]),
    trigger('list1', [
      state(
        'in',
        style({
          opacity: 1,
          transform: 'translateX(0)',
        })
      ),
      transition('void => *', [
        style({
          opacity: 0,
          transform: 'translateX(-100px)',
        }),
        animate(600),
      ]),
      transition('* => void', [
        animate(
          500,
          style({
            transform: 'translateX(100px)',
            opacity: 0,
          })
        ),
      ]),
      // transition('highlighted => normal', animate(300)),
    ]),
  ],
})
export class AppComponent {
  state = 'normal';
  wildState = 'normal';
  in = '';
  list = ['Milk', 'Sugar', 'Bread'];

  onAnimate() {
    this.state == 'normal'
      ? (this.state = 'highlighted')
      : (this.state = 'normal');
    this.wildState == 'normal'
      ? (this.wildState = 'highlighted')
      : (this.wildState = 'normal');
  }

  onShrink() {
    this.wildState = 'shrunken';
    // ? (this.wildState = 'shrunken')
    // : (this.wildState = 'normal');
  }

  onAdd(item: any) {
    this.list.push(item);
  }

  onDelete(item: any) {
    this.list.splice(this.list.indexOf(item), 1);
  }
}
