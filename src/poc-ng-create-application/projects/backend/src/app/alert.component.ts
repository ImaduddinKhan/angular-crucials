import { Component, Input, OnInit } from '@angular/core';
@Component({
  selector: 'app-alert',
  template: `<div>
    <p>This is an alert. {{ message }}</p>
  </div>`,
  styles: [
    `
      div {
        border: 1px solid black;
        background: salmon;
        padding: 10px;
        font-family: sans-sarif;
      }
    `,
  ],
})
export class AlertComponent implements OnInit {
  @Input() message: string;

  constructor() {}
  ngOnInit(): void {}
}
