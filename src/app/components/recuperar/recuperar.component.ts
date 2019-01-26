import { Component, OnInit } from '@angular/core';
import {NgForm}from "@angular/forms";
import {OlvidoClave} from "../../interfaces/olvido.interface";
import {PeticionesService} from "../services/peticiones.service";
import { User, setUser, getDatos, getRanking } from '../models/log.usuario';
@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {
  public usserLogged:User;
  olvido:OlvidoClave ={
    rut:""
  }

  constructor(private _peticionesService:PeticionesService ) {
    this.usserLogged=JSON.parse(localStorage.getItem('currentUser'));

   }

  ngOnInit() {
  }

  guardar(){
    console.log(this.olvido);
    //inserción
    this._peticionesService.olvidoClave(this.usserLogged.rut)
    .subscribe(result =>{
            if(result!=200){
              alert('Correo enviado');
            }
            else{
              console.log("Error")
            }
    },
    error => console.error(error));

  };

}
