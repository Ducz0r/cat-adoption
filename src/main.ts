import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { HttpClientModule } from '@angular/common/http';

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule, NgbModule, HttpClientModule),
      provideRouter(APP_ROUTES, withComponentInputBinding(), withPreloading(PreloadAllModules))
    ]
  }
)
.catch(err => console.error(err));
