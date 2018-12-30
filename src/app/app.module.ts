import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routing, appRoutingProviders } from './app.routing';

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

const appRoutes:Routes=[
    {
      path: '',
      component:LoginComponent
    },

    {
      path: 'home',component:HomeComponent
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

  ],
  imports: [
      RouterModule.forRoot(appRoutes),
    BrowserModule,
    routing,
    ChartsModule,
    
    //AppRoutingModule
  ],
  providers: [
    appRoutingProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
