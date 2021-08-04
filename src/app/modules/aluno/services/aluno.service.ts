import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Aluno } from "../models/aluno";
import { AlunoForm } from "../models/aluno-form";

const API = 'http://localhost:8080';

@Injectable({
    providedIn: 'root'
})
export class AlunoService {

    constructor(private http: HttpClient) {

    }

    getOne(id: number) {
        return this.http.get<Aluno>(`${API}/alunos/${id}`);
    }

    getPageable(page: number, escolaId: number) {
        if (!page) {
            page = 0;
        }

        const params = new HttpParams()
            .append('page', `${page}`)
            .append('escolaId', `${escolaId}`);

        return this.http.get<Aluno[]>(`${API}/alunos/page`, { params });
    }

    save(alunoForm: AlunoForm) {
        return this.http.post<Aluno>(API + '/alunos', alunoForm);
    }
    update(alunoForm: AlunoForm) {
        return this.http.put<Aluno>(API + '/alunos', alunoForm);
    }
    delete(id: number) {
        return this.http.delete(`${API}/alunos/${id}`)
    }
}