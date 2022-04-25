import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class HttpHeadersInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    req = req.clone({
      setHeaders: {
        'X-RapidAPI-Host': 'rawg-video-games-database.p.rapidapi.com',
        'X-RapidAPI-Key': '93a4f26128msh0c25e69cb75766ap181eedjsn4b52a9c350a2',
      },
      setParams: {
        key: '606cff3a646342c4b9bdea56190ba1bf',
      },
    });
    return next.handle(req);
  }
}
