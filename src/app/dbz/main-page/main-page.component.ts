import { Component, OnInit } from '@angular/core';
import { Personaje } from '../interfaces/dbz.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent {
  constructor(private dbzService:DbzService){
    
  }

  nuevo:Personaje = {
    nombre: 'Roshi',
    poder: 1000
  };


  // agregarNuevoPersonaje( arr:Personaje){
  //   this.dbzService.agregarPersonajes(arr);
  // }

}
