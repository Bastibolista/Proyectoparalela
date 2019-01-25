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
//import { HomeDocenteComponent } from './home-docente/home-docente.component';


import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';

import { catchError } from 'rxjs/operators';

import { PeticionesService } from './components/services/peticiones.service';

import { HomeEstudianteComponent } from './home-estudiante/home-estudiante.component';
import { HomeDocenteComponent } from './components/home-docente/home-docente.component';
import { ListadoEstudianteComponent } from './components/listado-estudiante/listado-estudiante.component';
import { GraficoAlumnoComponent } from './components/grafico-alumno/grafico-alumno.component';


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
    ListadoEstudianteComponent,
    GraficoAlumnoComponent,


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
    appRoutingProviders,
    PeticionesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
