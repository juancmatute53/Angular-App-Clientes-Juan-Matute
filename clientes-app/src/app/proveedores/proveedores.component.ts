import { Component, OnInit } from '@angular/core';
import { Proveedor } from './proveedor';
import { PROVEEDORES } from './proveedores.json';
import { ProveedorService } from '../clientes/proveedor.service';

@Component({
  selector: 'app-proveedores',
  templateUrl: './proveedores.component.html',
})
export class ProveedoresComponent implements OnInit {

  proveedores: Proveedor[] =[];


  constructor(private proveedorService: ProveedorService) { }

  ngOnInit(): void {
    this.proveedores = this.proveedorService.getProveedores();

  }

}
