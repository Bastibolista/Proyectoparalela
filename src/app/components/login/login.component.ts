import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LogUsuario } from '../models/log.usuario';
import { FormsModule }   from '@angular/forms';
import { PeticionesService } from '../services/peticiones.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usuario:LogUsuario;
  constructor(
      private router:Router,
      private _http: HttpClient

    ) { 

    this.usuario = new LogUsuario('','')

  }

  ngOnInit() {
  }	

  onSubmit(){

    console.log("evento enviado");
    console.log(this.usuario);
    this._http.post('/api/v1/students/',{
      rut: this.usuario.rut
    }).subscribe((data:any)=>{console.log(data)});


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
