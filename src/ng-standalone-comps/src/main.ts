import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { AppRoutingModule } from './app/app-routing.module';
import { AppComponent } from './app/app.component';
import { AnalyticsService } from './app/shared/analytics.service';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

// Migrating to standalone components
bootstrapApplication(AppComponent, {
  // providing services globally in standalone components
  providers: [AnalyticsService, importProvidersFrom(AppRoutingModule)],
});
