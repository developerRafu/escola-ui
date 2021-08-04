import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { TurmaListComponent } from './turma-list/turma-list.component';
import { TurmaComponent } from './turma/turma.component';
import { TurmaDetailComponent } from './turma-detail/turma-detail.component';
import { AlunoModule } from '../aluno/aluno.module';
import { TurmaFormComponent } from './turma-form/turma-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';




@NgModule({
  declarations: [
    TurmaListComponent, 
    TurmaComponent, 
    TurmaDetailComponent, TurmaFormComponent],
  imports: [
    CommonModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    AlunoModule
  ]
})
export class TurmaModule { }
