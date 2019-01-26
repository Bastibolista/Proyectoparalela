import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cambiar-clave',
  templateUrl: './cambiar-clave.component.html',
  styleUrls: ['./cambiar-clave.component.css']
})
export class CambiarClaveComponent implements OnInit {
  public pws1:string;
  public pws2:string;
  

  constructor() { }

  ngOnInit() {
  }

}
