import { Component, OnInit } from '@angular/core';
import { Router, Routes,RouterModule } from '@angular/router';
import { PeticionesService } from '../components/services/peticiones.service';
//import { LoginComponent } from '../components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { GetUsuario } from '../components/models/log.usuario';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.component.html',
  styleUrls: ['./home-estudiante.component.css'],
  providers: [PeticionesService],
})
export class HomeEstudianteComponent implements OnInit {
	rut:string;
	//public GetUsuario:GetUsuario;
  constructor(
  	//private router:Router,
  	//private _http: HttpClient,
  	private _peticionesService:PeticionesService,
  	//private _loginDatos:LoginComponent
  	) {
  		//this.GetUsuario = new GetUsuario('','','')
  	}

  ngOnInit() {
  	this.rut=this._peticionesService.rut;
  	console.log(this.rut);



  }

}

/*

import { Component, OnInit } from '@angular/core';
import { Router, Routes,RouterModule } from '@angular/router';
import { PeticionesService } from '../components/services/peticiones.service';
import { LoginComponent } from '../components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { GetUsuario } from '../components/models/log.usuario';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.component.html',
  styleUrls: ['./home-estudiante.component.css'],
  providers: [PeticionesService],
})
export class HomeEstudianteComponent implements OnInit {
	rut:string;
	public GetUsuario:GetUsuario;
  constructor(
  	private router:Router,
  	private _http: HttpClient,
  	private _peticionesService:PeticionesService,
  	private _loginDatos:LoginComponent
  	) {
  		//this.GetUsuario = new GetUsuario('','','')
  	}

  ngOnInit() {
  	this.rut=this._loginDatos.rut;
  	console.log(this.rut);

  }

}


*/
