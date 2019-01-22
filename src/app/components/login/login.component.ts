import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogUsuario } from '../models/log.usuario';
import { FormsModule }   from '@angular/forms';
import { PeticionesService } from '../services/peticiones.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [PeticionesService]
})
export class LoginComponent implements OnInit {
  public usuario:LogUsuario;

  constructor(
      private router:Router,
      private _http: HttpClient,
      private _peticionesService:PeticionesService

    ) { 

    this.usuario = new LogUsuario('','')

  }

  ngOnInit() {
  }	

  onSubmit(form){
    this._peticionesService.login(this.usuario.rut,this.usuario.password).subscribe(
      response=>{
        console.log(response)
      },
      error=>{
        console.log(<any>error);
      }

      );
    console.log("evento enviado");
    console.log(this.usuario);
    

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
