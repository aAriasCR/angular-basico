import { Component, OnInit } from '@angular/core';
import { HeroeComponent } from '../heroe/heroe.component';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {
  HeroeBorrado:string = '';
  heroes: string[] = ['Spiderman','Iroman','Hulk','Thor','Capitan America'];


  borrarHeroe():void{
    this.HeroeBorrado = this.heroes.pop() || '';
  }

  borrado():number{
    return this.HeroeBorrado.length;
  }
}
