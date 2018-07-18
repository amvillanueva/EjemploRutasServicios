import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tablas',
  templateUrl: './tablas.component.html',
  styleUrls: ['./tablas.component.css']
})
export class TablasComponent implements OnInit {
  ListaCursos: String []= ['HTML','PHP','JAVASCRIPT','JAVA','VB.NET','C#.NET','ASP'];
  ListaAnimales:Array<any> = 
  [ {tipo:'Perro',nombre:'Lucho', edad:10},
    {tipo:'Gato',nombre:'Pepe', edad:3},
    {tipo:'Gallo',nombre:'Tomas', edad:2},
    {tipo:'Pato',nombre:'Lucas', edad:6},
    {tipo:'Conejo',nombre:'Box', edad:4},
  ]
  constructor() { }

  ngOnInit() {
  }

}
