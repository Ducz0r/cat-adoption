import { APP_INITIALIZER, importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { PreloadAllModules, provideRouter, withComponentInputBinding, withPreloading } from '@angular/router';
import { APP_ROUTES } from './app/routes';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { UserService } from './app/user/services';
import { basicAuthInterceptor } from './app/http-interceptors';
import { ConfigRepository } from './app/shared/data';

export function initializeApp(configRepository: ConfigRepository, userService: UserService): () => void {
  return (): void => {
    // Load config file
    configRepository.get$().subscribe({
      error: err => {
        console.error('Error loading config.', err);
      }
    });

    // Initialize user service
    userService.init();
  }
}

bootstrapApplication(
  AppComponent,
  {
    providers: [
      importProvidersFrom(BrowserModule),
      provideRouter(APP_ROUTES, withComponentInputBinding(), withPreloading(PreloadAllModules)),
      provideHttpClient(withInterceptors([ basicAuthInterceptor ])),
      {
        provide: APP_INITIALIZER,
        useFactory: initializeApp,
        multi: true,
        deps: [ConfigRepository, UserService]
      }
    ]
  }
)
.catch(err => console.error(err));
