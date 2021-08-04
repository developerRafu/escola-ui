import { Component, Input, OnInit } from '@angular/core';
import { Turma } from 'src/app/modules/turma/models/turma';

@Component({
  selector: 'app-turma',
  templateUrl: './turma.component.html',
  styleUrls: ['./turma.component.css']
})
export class TurmaComponent implements OnInit {

  @Input()
  turma: Turma;
  grau = [];
  
  graus: Array<{
    grauNum: number;
    label: string;
  }> = [
      {
        grauNum: 0,
        label: `Ensino básico`
      },
      {
        grauNum: 1,
        label: `Ensino fundamental I`
      },
      {
        grauNum: 2,
        label: `Ensino fundamental II`
      },
      {
        grauNum: 3,
        label: `Ensino médio`
      }
    ];

  constructor() { }

  ngOnInit(): void {
    this.grau = this.graus.filter(grau=>grau.grauNum === this.turma.grau);
  }

}
