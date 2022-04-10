import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-colecao-cursos',
  templateUrl: './colecao-cursos.component.html',
  styleUrls: ['./colecao-cursos.component.css']
})
export class ColecaoCursosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  cursos: Curso[] = [
    {
      nome: 'Angular', 
      horas: 30
    },
    {
      nome: 'Java',
      horas: 30
    },
    {
      nome: 'Javascript',
      horas: 50
    },
    {
      nome: 'NodeJS',
      horas: 30
    },
    {
      nome: 'Typescript',
      horas: 20
    }
  ];

}

class Curso {
  nome!: string;
  horas!: number;
}
  
