import { Injectable } from '@angular/core';
import { EnvService } from '../env/env.service';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(
    private envSrv : EnvService,
  ) { }

  public get() {
    return this.envSrv.getQuery(`AgrupacionExtraController.php`)
  }
}
