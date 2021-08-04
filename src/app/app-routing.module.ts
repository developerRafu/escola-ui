import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AlunoDetailComponent } from './modules/aluno/components/aluno-detail/aluno-detail.component';
import { AlunoFormComponent } from './modules/aluno/components/aluno-form/aluno-form.component';
import { TurmaForm } from './modules/turma/models/turma-form';
import { TurmaDetailComponent } from './modules/turma/turma-detail/turma-detail.component';
import { TurmaFormComponent } from './modules/turma/turma-form/turma-form.component';
import { TurmaListComponent } from './modules/turma/turma-list/turma-list.component';


const routes: Routes = [
  {
    path: '',
    component: TurmaListComponent
  },
  {
    path: 'new',
    component: TurmaFormComponent
  },
  {
    path: ':turmaId',
    component: TurmaDetailComponent
  },
  {
    path: ":turmaId/alunos/new",
    component: AlunoFormComponent
  },
  {
    path: ":turmaId/alunos/:alunoId/edit",
    component: AlunoFormComponent
  },
  {
    path: ':turmaId/alunos/:alunoId',
    component: AlunoDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
