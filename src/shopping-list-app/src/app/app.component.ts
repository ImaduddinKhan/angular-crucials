import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { Store } from '@ngrx/store';
import { isPlatformBrowser } from '@angular/common';

import { AuthService } from './auth/auth.service';
import { LoggingService } from './logging.service';
import * as formApp from './store/app.reducer';
import * as AuthActions from './auth/store/auth.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(
    private store: Store<formApp.AppState>,
    private authService: AuthService,
    private loggingService: LoggingService,
    @Inject(PLATFORM_ID) private platformId
  ) {}

  ngOnInit(): void {
    // this.authService.autoLogin();
    if (isPlatformBrowser(this.platformId)) {
      this.store.dispatch(new AuthActions.AutoLogin());
    }
    this.loggingService.pringLog('Hello from app component ngOnInit');
  }
}
