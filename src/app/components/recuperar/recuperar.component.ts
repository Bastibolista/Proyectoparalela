import { Component, OnInit } from '@angular/core';
import {NgForm}from "@angular/forms";
import {OlvidoClave} from "../../interfaces/olvido.interface";
import {PeticionesService} from "../services/peticiones.service";
import { User, setUser, getDatos, getRanking, olvido1 } from '../models/log.usuario';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  public usserLogged:User;
  public olvido1:olvido1;
  olvido:OlvidoClave ={
    rut:""
  }

  constructor(

    private _peticionesService:PeticionesService
   ) {

    this.usserLogged=JSON.parse(localStorage.getItem('currentUser'));
    this.olvido1 = new olvido1('');
   }

  ngOnInit() {
  }

  guardar(){
    console.log(this.olvido1);
    //inserción
    this._peticionesService.olvidoClave(this.olvido1.rut)
    .subscribe(result =>{
            if(result!=200){
              alert("Coreo Enviado");
              //this.router.navigate(['/HomeEstudiante']);
            }
            else{
              console.log("Error")
            }
    },
    error => console.error(error));

  };

}
