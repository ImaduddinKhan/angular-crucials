import { ViewEncapsulation } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
//   encapsulation: ViewEncapsulation.Emulated 
})
export class ServerElementComponent implements OnInit {
  
  @Input('srvcElement') element: {type: string, name: string, content: string};

  constructor() { }

  ngOnInit(): void {
  }

}
