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
  able = true;
  hasTurmas = false;
  constructor(private service: TurmaService) { }

  ngOnInit(): void {
    this.service.getPageable(this.page)
      .subscribe(
        turmas => {
          this.turmas = turmas;
          if(turmas.length>0){
            this.hasTurmas = true;
          }
        },
        error => console.log(error.error.message)
      );
  }
  loadMore() {
    
    this.page++;
    this.service.getPageable(this.page)
      .subscribe(res => {
        if(res.length>0){
          this.hasTurmas = true;
        this.turmas.concat(res);
        }else{
          this.able = false;
        }
      },
        error => alert(error.error.message));
  }
}
