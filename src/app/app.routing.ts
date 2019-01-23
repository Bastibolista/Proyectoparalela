import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { TeacherComponent } from './components/teacher/teacher.component';
import { StudentComponent } from './components/student/student.component';
import { ComparacionComponent } from './components/comparacion/comparacion.component';
import { RecuperarComponent } from './components/recuperar/recuperar.component';
import { HomeEstudianteComponent } from './home-estudiante/home-estudiante.component';

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
    {path: 'Estudiante', component: HomeEstudianteComponent,canActivate:[AuthGuard]},
	{path: '**', component: LoginComponent}


];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
