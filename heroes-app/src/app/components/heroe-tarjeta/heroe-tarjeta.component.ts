import { Component, Input, OnInit,Output,EventEmitter } from '@angular/core';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
  styleUrls: ['./heroe-tarjeta.component.css']
})
export class HeroeTarjetaComponent implements OnInit {

  @Input() heroe:any={}; //con input le digo que esto puede venir  desde el padre
  @Input() ind:number=0;

  @Output() heroeSeleccionado:EventEmitter<number>;
  constructor( private router:Router) {
    this.heroeSeleccionado = new EventEmitter();
  }

  ngOnInit(): void {
  }

   verHeroe(ind:number){
    //esta funcion recibe un index de un heroe y despliega la vista
    this.heroeSeleccionado.emit(this.ind);
   this.router.navigate(['/heroe',ind]);//redireccionamiento

 }

}
