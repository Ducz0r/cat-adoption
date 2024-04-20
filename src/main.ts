import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { HttpClientModule } from '@angular/common/http';
import { UserRepository } from './app/user/data';

export function initializeApp(userRepository: UserRepository) {
  return (): void => {
    // Set current user to null
    userRepository.set(null);
  }
}

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule, NgbModule, HttpClientModule),
      provideRouter(APP_ROUTES, withComponentInputBinding(), withPreloading(PreloadAllModules)),
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        multi: true,
        deps: [UserRepository]
      }
    ]
  }
)
.catch(err => console.error(err));
