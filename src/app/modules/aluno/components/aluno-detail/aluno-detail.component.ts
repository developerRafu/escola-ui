import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../models/aluno';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-detail',
  templateUrl: './aluno-detail.component.html',
  styleUrls: ['./aluno-detail.component.css']
})
export class AlunoDetailComponent implements OnInit {

  aluno: Aluno;
  id: number;
  constructor(
    private service: AlunoService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.alunoId;
    this.service.getOne(this.id).subscribe(
      res => this.aluno = res,
      error => console.log(error.error.message)
    );
  }
  apagar() {
    const res = confirm('Deseja continuar?');
    if (!res) {
      return;
    }
    this.service.delete(this.aluno.id).subscribe(
      res => this.router.navigate(['']),
      error => alert(error.error.msg));
  }
}
