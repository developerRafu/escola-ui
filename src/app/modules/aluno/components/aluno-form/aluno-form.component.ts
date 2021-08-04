import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Aluno } from '../../models/aluno';
import { AlunoForm } from '../../models/aluno-form';
import { AlunoService } from '../../services/aluno.service';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit {

  form: FormGroup;
  turmaId: number;
  alunoId: number;
  aluno: Aluno;
  constructor(
    private builder: FormBuilder,
    private service: AlunoService,
    private activatedRoute: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.turmaId = this.activatedRoute.snapshot.params.turmaId;
    this.form = this.builder.group({
      nome: [null, Validators.required],
      idade: [null, Validators.required]
    });
    this.alunoId = this.activatedRoute.snapshot.params.alunoId;

    if (!this.alunoId) {
      return;
    }
    this.service.getOne(this.alunoId).subscribe(res => {
      this.aluno = res;
      this.form.get('nome').setValue(this.aluno.nome);
      this.form.get('idade').setValue(this.aluno.idade);
    }, error => {
      alert(error.error.message);
      this.router.navigateByUrl('');
    })
  }

  submit() {
    if (!this.form.valid) {
      alert('Preencha o formulário corretamente');
      return;
    }
    if (this.aluno) {
      const alunoForm = this.form.getRawValue() as AlunoForm;
      alunoForm.turmaId = this.turmaId;
      alunoForm.id = this.alunoId;
      this.service.update(alunoForm).subscribe(res => this.router.navigateByUrl(''),
        error => alert(error.error.message));
    } else {
      const alunoForm = this.form.getRawValue() as AlunoForm;
      alunoForm.turmaId = this.turmaId;
      this.service.save(alunoForm).subscribe(res => this.router.navigateByUrl(''),
        error => alert(error.error.message));
    }
  }
}
