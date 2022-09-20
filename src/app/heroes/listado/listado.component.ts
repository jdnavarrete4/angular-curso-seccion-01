import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent  {

heroes: String[]=['Spiderman','ironman','Goku'];
heroeBorrado: String='';
show: false = false;

borrarHeroe(){
  this.heroeBorrado  = this.heroes.shift() || '';
 
}



}
