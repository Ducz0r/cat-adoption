import { HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { UserService } from '../user/services';
import { inject } from '@angular/core';

const WHITELISTED_URLS = [
  'assets/config.json'
];

export const basicAuthInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn) => {
  if (WHITELISTED_URLS.some(url => url === req.url)) {
    return next(req);
  }

  const userService: UserService = inject(UserService);

  const userAuthData: string | null = userService!.getUserAuthData();

  let request: HttpRequest<any> = req;

  if (userAuthData !== null) {
    // Add basic authorization header to requests
    request = req.clone({
      headers: req.headers.set('Authorization', `Basic ${userAuthData}`)
    });
  }

  return next(request);
};
