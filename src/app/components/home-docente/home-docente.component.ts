//import { Component, OnInit } from '@angular/core';
import { Component, OnInit, Input } from '@angular/core';
import { Router, Routes,RouterModule } from '@angular/router';
import { PeticionesService } from '../services/peticiones.service';
//import { LoginComponent } from '../components/login/login.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { GetUsuario } from '../components/models/log.usuario';
import { User, setUser, getData } from '../models/log.usuario';


@Component({
  selector: 'app-home-docente',
  templateUrl: './home-docente.component.html',
  styles: ['./home-docente.component.css'],
  providers: [PeticionesService],
})
export class HomeDocenteComponent implements OnInit {
  private isUserLoggedIn;
  	public usserLogged:User;
  	public usuario: setUser;
    public profe: getData;
    name:string;
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
      this.profe = new getData('','','','',''),
  		this.usserLogged=JSON.parse(localStorage.getItem('currentUser'));
  	}

  ngOnInit() {
  	this.rut=this.usserLogged.rut;
  	this.apiKey=this.usserLogged.apiKey;
  	this.usuario.rut=this.rut;
  	this.usuario.apiKey=this.apiKey;
    this._peticionesService.getUser(this.apiKey,this.rut)
    .subscribe(
            response=>{
              this.profe=response[1].teacher;
            //  this.rank=response[1];
            //console.log(this.rank);
            console.log(this.profe);
        //this._peticionesService.setRut(this.rut);
      },
      error=>{
        console.log(<any>error);
      }
            );

  }
}
  	//console.log(this._peticionesService.getProfe(this.apiKey,this.rut));
//  }

//}
