import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserService } from './app/user/services';
import { basicAuthInterceptor } from './app/http-interceptors';

export function initializeApp(userService: UserService): () => void {
  return (): void => {
    // Initialize user service
    userService.init();
  }
}

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule, NgbModule),
      provideRouter(APP_ROUTES, withComponentInputBinding(), withPreloading(PreloadAllModules)),
      provideHttpClient(withInterceptors([ basicAuthInterceptor ])),
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        multi: true,
        deps: [UserService]
      }
    ]
  }
)
.catch(err => console.error(err));
