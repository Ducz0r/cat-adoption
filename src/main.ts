import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/routes';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule, NgbModule),
      provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
    ]
  }
)
.catch(err => console.error(err));
