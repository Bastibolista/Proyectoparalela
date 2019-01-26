import { Component, OnInit } from '@angular/core';
import { User, setUser, getDatos, getRanking, cambiarclave} from '../models/log.usuario';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'app-cambiar-clave-alumno',
  templateUrl: './cambiar-clave-alumno.component.html',
  styleUrls: ['./cambiar-clave-alumno.component.css'],
  providers: [PeticionesService]
})
export class CambiarClaveAlumnoComponent implements OnInit {
  public cambiar:cambiarclave;


  constructor(
    private _peticionesService:PeticionesService
  ) {
  this.cambiar = new cambiarclave('','','',''); }

  ngOnInit() {
  }

  guardar(){
    console.log(this.cambiar);
    //inserción
    //this._peticionesService.getclave(this.cambiar.pdw,this.cambiar.pdw1,this.cambiar.pdw2,this.cambiar.rut)
    .subscribe(
        response=>{
        console.log(response);
    //this._peticionesService.setRut(this.rut);
  },
  error=>{
    console.log(<any>error);
  }
        );

}
}
