import { Component, OnInit } from '@angular/core';
import { Router, Routes,RouterModule } from '@angular/router';
import { LogUsuario } from '../models/log.usuario';
import { FormsModule }   from '@angular/forms';
import { PeticionesService } from '../services/peticiones.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { first } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PeticionesService],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  error = '';
  rut:string;
  role:string;
  apiKey:string;
  public usuario:LogUsuario;

  constructor(
      private router:Router,
      private _http: HttpClient,
      private _peticionesService:PeticionesService

    ) {

    this.usuario = new LogUsuario('','')

    //this.returnUrl = this.router.navigate['/login'];
  }

  ngOnInit() {
    this._peticionesService.logout();
    this.returnUrl = this.router.navigate['/login'];
  }


  onSubmit(form){
    this._peticionesService.login(this.usuario.rut,this.usuario.password)
    .pipe(first())
    .subscribe(
      response=>{
        this.role=response.role;
        this.apiKey=response.apiKey;
        this.rut=response.rut;
        //this._peticionesService.setRut(this.rut);


      },
      error=>{
        console.log(<any>error);
      }

      );
    console.log("evento enviado");
    console.log(this.usuario);
    if(this.role=='Estudiante'){
          this.router.navigate(['/HomeEstudiante']);
        }
    else if (this.role=='Docente') {
          this.router.navigate(['/HomeDocente']);
        }
    else{
      alert("Datos No Validos");
    }

  }



  /*loginUser(e){

  		e.preventDefault();
  		console.log(e);
  		var username=e.target.elements[0].value;
  		var password=e.target.elements[1].value;

  		if(username=='admin' && password=='admin'){
  				this.router.navigate(['home']);
  		}else{
  			alert("Datos Incorrectos, Intente nuevamente");
  		}
  }*/

}
