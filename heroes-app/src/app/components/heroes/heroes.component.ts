import { Component, OnInit } from '@angular/core';

import { HeroesService } from 'src/app/services/heroes.service';
import { Heroe } from '../../services/heroes.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[]=[];
  constructor(private _heroesService:HeroesService, private router:Router) { }

  ngOnInit(): void {
      this.heroes = this._heroesService.getHeroes();
  }

   verHeroe(ind:number){
      //esta funcion recibe un index de un heroe y despliega la vista
      this.router.navigate(['/heroe',ind]);//redireccionamiento

   }

}
