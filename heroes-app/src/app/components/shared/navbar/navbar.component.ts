import { Component, OnInit } from '@angular/core';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }
 buscarHeroe(termino:string){
  console.log(termino);
  this.router.navigate(['/busqueda',termino]);//redireccionamiento a la pagina de busqueda de heroes
 }
}


