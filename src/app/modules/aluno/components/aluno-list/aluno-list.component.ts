import { Component, Input, OnInit } from '@angular/core';
import { Aluno } from '../../models/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-list',
  templateUrl: './aluno-list.component.html',
  styleUrls: ['./aluno-list.component.css']
})
export class AlunoListComponent implements OnInit {

  @Input()
  turmaId: number;

  alunos: Aluno[];
  
  page = 0;

  constructor(private service: AlunoService) { }

  ngOnInit(): void {
    this.service.getPageable(this.page, this.turmaId).subscribe(
      res=>this.alunos = res,
      error=>console.log(error.error.message)
      );
  }

}
