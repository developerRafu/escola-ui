import { Component, OnInit } from '@angular/core';
import { Turma } from '../models/turma';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-turma-list',
  templateUrl: './turma-list.component.html',
  styleUrls: ['./turma-list.component.css']
})
export class TurmaListComponent implements OnInit {

  turmas: Turma[] = [];
  page = 0;
  constructor(private service: TurmaService) { }

  ngOnInit(): void {
    this.service.getPageable(this.page)
    .subscribe(
      turmas=>this.turmas = turmas,
      error=> console.log(error.error.message)
      );
  }
}
