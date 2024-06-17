import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from './curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseURL = "http://localhost:8085/api/v2/cursos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeCursos(): Observable<Curso[]> {
    return this.httpClient.get<Curso[]>(`${this.baseURL}`);
  }
}
