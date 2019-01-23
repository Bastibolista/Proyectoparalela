import { Component, OnInit } from '@angular/core';
import {NgForm}from "@angular/forms";
import {OlvidoClave} from "../../interfaces/olvido.interface";

@Component({
  selector: 'app-recuperar',
  templateUrl: './recuperar.component.html',
  styleUrls: ['./recuperar.component.css']
})
export class RecuperarComponent implements OnInit {

  olvido:OlvidoClave ={
    rut:""
  }

  constructor() { }

  ngOnInit() {
  }

  guardar(){
    console.log(this.olvido);
  }

}
