import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Turma} from '../models/turma';
import { TurmaForm } from '../models/turma-form';

const API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class TurmaService {

  constructor(private http: HttpClient) {
  }

  getOne(id: number) {
    return this.http.get<Turma>(`${API}/turmas/${id}`);
  }

  getPageable(page: number) {
    console.log(page)
    if (!page) {
      page = 0;
    }
    const params = new HttpParams().append('page', page.toString());
    return this.http.get<Turma[]>(`${API}/turmas/page`, {params});
  }

  save(turmaForm: TurmaForm) {
    return this.http.post(API+'/turmas', turmaForm);
  }
}
