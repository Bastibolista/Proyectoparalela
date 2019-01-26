import { Component, OnInit } from '@angular/core';
import {NgForm}from "@angular/forms";
import {OlvidoClave} from "../../interfaces/olvido.interface";
import {PeticionesService} from "../services/peticiones.service";

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  olvido:OlvidoClave ={
    rut:""
  }

  constructor(private _peticionesService:PeticionesService ) { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.olvido);
    //inserción
    this._peticionesService.olvidoClave(this.olvido)
    .subscribe(result =>{
            if(result!=200){
              alert(result);
            }
            else{
              console.log("Algo paso")
            }
    },
    error => console.error(error));

  }

}
