import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: ['./busqueda.component.css']
})
export class BusquedaComponent implements OnInit {
  heroes:any[]=[];
  termino:string='';
  constructor(private activatedRoute:ActivatedRoute,private _heroesService:HeroesService,private router:Router) {

   }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params=>{
      this.termino = params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
      console.log(this.heroes);


    })
  }
  verHeroe(ind:number){
    //esta funcion recibe un index de un heroe y despliega la vista
    this.router.navigate(['/heroe',ind]);//redireccionamiento

}

}
