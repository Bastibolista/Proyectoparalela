import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';
import { HttpClientModule } from '@angular/common/http';

//import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { ChartsModule } from 'ng2-charts';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { ComparacionComponent } from './components/comparacion/comparacion.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule }   from '@angular/forms';
import { HomeDocenteComponent } from './home-docente/home-docente.component';


import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { PeticionesService } from './components/services/peticiones.service';
<<<<<<< HEAD
import { HomeEstudianteComponent } from './home-estudiante/home-estudiante.component';
=======
import { HomeDocenteComponent } from './components/home-docente/home-docente.component';
>>>>>>> 4b1c2fbf36f536b43f2b8cf8d6e7a2236d9dbfda

@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        // add authorization header with basic auth credentials if available
        let currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (currentUser && currentUser.authdata) {
            request = request.clone({
                setHeaders: { 
                    Authorization: `Basic ${currentUser.authdata}`
                }
            });
        }

        return next.handle(request);
    }
}

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
    constructor(private authenticationService: PeticionesService) {}

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        return next.handle(request).pipe(catchError(err => {
            if (err.status === 401) {
                // auto logout if 401 response returned from api
                this.authenticationService.logout();
                location.reload(true);
            }
            
            const error = err.error.message || err.statusText;
            return throwError(error);
        }))
    }
}




const appRoutes:Routes=[
    {
      path: '',
      component:LoginComponent
    },

    {
      path: 'login',component:LoginComponent
    }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    TeacherComponent,
    StudentComponent,
    ComparacionComponent,
    RecuperarComponent,
    HomeEstudianteComponent,
    HomeDocenteComponent,


  ],
  imports: [
      RouterModule.forRoot(appRoutes),
    BrowserModule,
    routing,
    ChartsModule,
    HttpClientModule,
    FormsModule
    
    //AppRoutingModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
