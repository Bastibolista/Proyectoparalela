import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { ComparacionComponent } from './components/comparacion/comparacion.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { HomeEstudianteComponent } from './components/home-estudiante/home-estudiante.component';
import { HomeDocenteComponent } from './components/home-docente/home-docente.component';
import { ListadoEstudianteComponent } from './components/listado-estudiante/listado-estudiante.component';
import { ListadoDocenteComponent } from './components/listado-docente/listado-docente.component';
import { GraficoAlumnoComponent } from './components/grafico-alumno/grafico-alumno.component';
import { AvisoDocenteComponent } from './components/aviso-docente/aviso-docente.component';
import { CambiarClaveComponent } from './components/cambiar-clave/cambiar-clave.component';

//import { AuthGuard } from './_guards';
import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {

    constructor(private router: Router) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/login/'], { queryParams: { returnUrl: state.url }});
        return false;
    }
}




const appRoutes: Routes = [
	{path: '', component: LoginComponent},
	{path: 'login', component: LoginComponent},
	{path: 'home', component: HomeComponent,canActivate:[AuthGuard]},
	{path: 'teacher', component: TeacherComponent,canActivate:[AuthGuard]},
	{path: 'student', component: StudentComponent,canActivate:[AuthGuard]},
	{path: 'comparacion', component: ComparacionComponent,canActivate:[AuthGuard]},
	{path: 'recuperar', component: RecuperarComponent,canActivate:[AuthGuard]},
  {path: 'HomeEstudiante', component: HomeEstudianteComponent,canActivate:[AuthGuard]},
  {path: 'HomeDocente', component: HomeDocenteComponent,canActivate:[AuthGuard]},
  {path: 'ListadoDocente', component: ListadoDocenteComponent,canActivate:[AuthGuard]},
  {path: 'ListadoEstudiante', component: ListadoEstudianteComponent,canActivate:[AuthGuard]},
  {path: 'GraficoAlumno', component: GraficoAlumnoComponent,canActivate:[AuthGuard]},
  {path: 'AvisoDocente', component: AvisoDocenteComponent,canActivate:[AuthGuard]},
  {path: 'CambiarClave', component: CambiarClaveComponent,canActivate:[AuthGuard]},
	{path: '**', component: LoginComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
