import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  userActivated = false;
  private activateDeactivate: Subscription | undefined;
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.activateDeactivate = this.userService.activatedEmitter.subscribe(
      (didActivate) => {
        this.userActivated = didActivate;
      }
    );
  }

  ngOnDestroy(): void {
    this.activateDeactivate?.unsubscribe();
  }
}
