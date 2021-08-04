import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TurmaForm } from '../models/turma-form';
import { TurmaService } from '../services/turma.service';

@Component({
  selector: 'app-turma-form',
  templateUrl: './turma-form.component.html',
  styleUrls: ['./turma-form.component.css']
})
export class TurmaFormComponent implements OnInit {
  form: FormGroup;
  constructor(
    private builder: FormBuilder,
    private router: Router,
    private service: TurmaService) { }

  ngOnInit(): void {
    this.form = this.builder.group({
      nome: [null, Validators.required],
      grau: [3, Validators.required]
    })
  }
  submit() {
    const turmaForm = this.form.getRawValue() as TurmaForm;
    this.service.save(turmaForm).subscribe(res => this.router.navigate(['']), error => alert(error.error.message))
  }
}
