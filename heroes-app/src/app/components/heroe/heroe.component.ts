import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
  styleUrls: ['./heroe.component.css']
})
export class HeroeComponent {

  heroe:any={};
  casa:string="";
  constructor(private activatedRoute:ActivatedRoute,private _heroesServices:HeroesService ) {

    this.activatedRoute.params.subscribe(params => {console.log(params['id']);
    this.heroe = _heroesServices.getHeroe(params['id']);
    if(this.heroe.casa =='DC'){
      this.casa ="assets/img/dc-logo.jpg";
    }else{
      this.casa ="assets/img/marvel-logo.png";
    }

  });
  }


}
