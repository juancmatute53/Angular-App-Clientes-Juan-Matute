import { Injectable } from '@angular/core';
import { PROVEEDORES } from '../proveedores/proveedores.json';
import { Proveedor } from '../proveedores/proveedor';

@Injectable({
  providedIn: 'root'
})

export class ProveedorService {

  constructor() { }

  getProveedores(): Proveedor[]{
    return PROVEEDORES
  }
}
