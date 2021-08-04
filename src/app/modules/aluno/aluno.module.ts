import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlunoListComponent } from './components/aluno-list/aluno-list.component';
import { AlunoComponent } from './components/aluno/aluno.component';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AlunoDetailComponent } from './components/aluno-detail/aluno-detail.component';
import { AlunoFormComponent } from './components/aluno-form/aluno-form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [AlunoListComponent, AlunoComponent, AlunoDetailComponent, AlunoFormComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule
  ],
  exports: [AlunoListComponent]
})
export class AlunoModule { }
