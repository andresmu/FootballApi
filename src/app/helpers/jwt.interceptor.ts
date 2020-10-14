import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpResponse, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';


@Injectable()
export class JwtInterceptor implements HttpInterceptor{
    // Interceptar y manejar una solicitud http dada

    constructor(private router: Router) {}

    // function intercept
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let token = 'lcL5n6pQl2mshahRJ25twegttGDCp190eh0jsnzN2jV39EqBCA';
        req = req.clone({
            setHeaders: {
                'x-rapidapi-key': `${token}`
            }
        });

        return next.handle(req).pipe(
            tap((event: HttpEvent<any>) => {
                if (event instanceof HttpResponse) {
                    console.log(event);
                }
            }, (err: any) => {
                if(err instanceof HttpErrorResponse) {
                    if(err.status === 401) {
                        this.router.navigate(['/auth']);
                    }
                }
            })
        );
    }
}