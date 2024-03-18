import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { TokenService } from '../services/token/token.service';
import { TokenInterface } from '../interface/token-interface';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private tokenSrv: TokenService,
  ) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request)
    .pipe(  
      catchError((error: HttpErrorResponse) => {
        if ( error.status === 401 ) {
          console.log('401 Unauthorized')
          this.tokenSrv.removeToken();
          return next.handle(request);
        }
        return throwError(error)
      })
    )
  }
}
