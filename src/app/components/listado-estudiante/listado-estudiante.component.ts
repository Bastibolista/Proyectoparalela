import { Component, OnInit } from '@angular/core';
import { Router, Routes,RouterModule } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';
//import { LoginComponent } from '../components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { GetUsuario } from '../components/models/log.usuario';
import { User, setUser, getDatos } from '../models/log.usuario';

@Component({
  selector: 'app-listado-estudiante',
  templateUrl: './listado-estudiante.component.html',
  styleUrls: ['./listado-estudiante.component.css'],
  providers: [PeticionesService],
})
export class ListadoEstudianteComponent implements OnInit {

	private isUserLoggedIn;
  	public usserLogged:User;
  	public usuario: setUser;
  	//public resu: resul;
    public estudiante: getDatos;
  	rut:string;
  	apiKey:string;
    name:string;
    lastname:string;
    variable:any;
    // Doughnut
    public doughnutChartLabels:string[] = ['Aprobados', 'Reprobados'];
    public doughnutChartData:number[] = [27, 13];
    public doughnutChartType:string = 'doughnut';

  constructor(
  	private _peticionesService:PeticionesService
  	) {
  	this.usuario = new setUser('',''),
    this.estudiante = new getDatos('','','','',''),
  	this.usserLogged=JSON.parse(localStorage.getItem('currentUser'))
    //console.log(this._peticionesService.getDatos(this.usserLogged.apiKey,this.usserLogged.rut));

  	}

  ngOnInit() {
	this.rut=this.usserLogged.rut;
  	this.apiKey=this.usserLogged.apiKey;
  	this.usuario.rut=this.rut;
  	this.usuario.apiKey=this.apiKey;
  	this._peticionesService.getUser(this.apiKey,this.rut)
  	.subscribe(
            response=>{
            	
            	this.estudiante=response[1].student;
        		console.log(this.estudiante);

        //this._peticionesService.setRut(this.rut);
      },
      error=>{
        console.log(<any>error);
      }
            );
  	

  }

}




