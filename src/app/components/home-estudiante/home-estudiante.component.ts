import { Component, OnInit, Input } from '@angular/core';
import { Router, Routes,RouterModule } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';
//import { LoginComponent } from '../components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { GetUsuario } from '../components/models/log.usuario';
import { User, setUser } from '../models/log.usuario';

@Component({
  selector: 'app-home-estudiante',
  templateUrl: './home-estudiante.component.html',
  styleUrls: ['./home-estudiante.component.css'],
  providers: [PeticionesService],
})
export class HomeEstudianteComponent implements OnInit {
	private isUserLoggedIn;
  	public usserLogged:User;
  	public usuario: setUser;
  	rut:string;
  	apiKey:string;
    // Doughnut
    public doughnutChartLabels:string[] = ['Aprobados', 'Reprobados'];
    public doughnutChartData:number[] = [27, 13];
    public doughnutChartType:string = 'doughnut';

    // events
    public chartClicked(e:any):void {
      console.log(e);
    }

    public chartHovered(e:any):void {
      console.log(e);
    }
    
  constructor(

  		private _peticionesService:PeticionesService
  	) {
  		this.usuario = new setUser('',''),
  		this.usserLogged=JSON.parse(localStorage.getItem('currentUser'));
  	}

  ngOnInit() {
  	this.rut=this.usserLogged.rut;
  	this.apiKey=this.usserLogged.apiKey;
  	this.usuario.rut=this.rut;
  	this.usuario.apiKey=this.apiKey;
  	console.log(this._peticionesService.getUser(this.apiKey,this.rut));
  }

}
