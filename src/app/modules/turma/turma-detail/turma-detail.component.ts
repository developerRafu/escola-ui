import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Turma } from '../models/turma';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-turma-detail',
  templateUrl: './turma-detail.component.html',
  styleUrls: ['./turma-detail.component.css']
})
export class TurmaDetailComponent implements OnInit {

  turma: Turma;
  id: number;
  isOpenAlunos = false;

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

  constructor(
    private service: TurmaService,
    private activatedRoute: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.turmaId;
    this.service.getOne(this.id).subscribe(
      res => {
        this.turma = res;
        this.grau = this.graus.filter(grau=>grau.grauNum === this.turma.grau);
      },
      error => console.log(error.error.message)
      );
  }

  openAlunos(){
    this.isOpenAlunos = true;
  }

}
