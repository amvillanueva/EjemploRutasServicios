import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {
  equipo:any[]=[
    {nombre:'Anthony',
     especialidad: '.net',
     descripcion: 'Lorem ipsum dolor si amet consecterurLorem ipsum dolor si amet consecterur'
    },
    {nombre:'Angeline',
    especialidad: 'java',
    descripcion: 'part2 Lorem ipsum dolor si amet consecterurLorem ipsum dolor si amet consecterur'
    },
    {nombre:'Jose',
    especialidad: 'phyton',
    descripcion: 'part3 Lorem ipsum dolor si amet consecterurLorem ipsum dolor si amet consecterur'
    }
  ]

  constructor() { 
    console.log('el servicio esta funcionando')
  }

  obtenerEquipo(){
    return this.equipo;
  }

  obtenerPersonaEquipo(i){
    return this.equipo[i]

  }


}
