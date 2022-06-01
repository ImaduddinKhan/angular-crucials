import { 
    AfterContentChecked, 
    AfterContentInit, 
    AfterViewChecked, 
    AfterViewInit, 
    ContentChild, 
    DoCheck, 
    ElementRef, 
    OnChanges, 
    OnDestroy, 
    SimpleChanges, 
    ViewChild
} from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
//   encapsulation: ViewEncapsulation.Emulated 
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit,
AfterContentChecked,
AfterViewInit,
AfterViewChecked,
OnDestroy {
  
  @Input('srvcElement') element: {type: string, name: string, content: string};
  @Input() name: string;

  @ViewChild('header', {static: true}) heading: ElementRef;
  @ContentChild('contentParagraph', {static:true}) paragraph: ElementRef;
  constructor() { 
      console.log('constructor call');
  }
  ngOnChanges(changes: SimpleChanges) {
      //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
      //Add '${implements OnChanges}' to the class.
      console.log('ngOnChanges call');
      console.log(changes);
      
  }

  ngOnInit() {
    console.log('ngOnInit call');
    console.log('Content text: ' + this.heading.nativeElement.textContent)
    console.log('Paragraph Content text: ' + this.paragraph.nativeElement.textContent)
  }

  ngDoCheck(){
    console.log('doCheck call')
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit call')
    console.log('Paragraph Content text: ' + this.paragraph.nativeElement.textContent)
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked call')
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit call')
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked call')
    console.log('Content text: ' + this.heading.nativeElement.textContent)

  }

  ngOnDestroy(): void {
      console.log('onDestroy call')
  }
}
