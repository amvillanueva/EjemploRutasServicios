//para poder leer la tura URL
import {ActivatedRoute} from '@angular/router'
//----------------
import { Component, OnInit } from '@angular/core';

import {EquipoService} from './../equipo.service'

@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})


export class EquipoComponent implements OnInit {

  arregloequipo:any[]=[];

  //se procedio a cofngiurar el consyructor para q pueda leer el id d ela ruta (URL)
  constructor(
    private ruta:ActivatedRoute,
    private _servicio:EquipoService
  
  
  ) { 
    
    this.ruta.params.subscribe(params=>{
      console.log(params['id'])
      this.arregloequipo=this._servicio.obtenerPersonaEquipo(params['id'])
      //this.arregloequipo= this._servicio,obtenerPersonaEquipo(params['id']);
  
  
  
    } )
    
  }

  ngOnInit() {
  }

}
