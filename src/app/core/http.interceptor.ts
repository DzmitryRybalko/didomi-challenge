import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent
} from '@angular/common/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import consents from './mock-consents';

@Injectable()
export class HttpConsentsInterceptor implements HttpInterceptor {
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      if (request.url.endsWith('consents') && request.method === 'GET') {
        return Observable.of(new HttpResponse({ status: 200, body: consents }));
      }

      if (request.url.endsWith('consent') && request.method === 'POST') {
        return Observable.of(new HttpResponse({ status: 200 }));
      }

      return next.handle(request);
  }
}