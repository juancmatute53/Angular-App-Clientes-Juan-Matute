import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html'
})
export class DirectivaComponent {

  listaPersonajes: string[] = ['Mario', 'Luigi', 'Yoshi','Toad','Capitán Toad'];
  listaPrincesas: string[] = ['Princesa Peach','Princesa Daisy','Princesa Rosalina','Pauline','Peachette'];
  listaVillanos: string[] = ['Bowser','Wario','Waluigi','Donkey Kong','Goomba'];
  habilitar: boolean = true;
  constructor() { }

  setHabilitar(): void{
    this.habilitar = (this.habilitar==true)? false: true;
  }
}
