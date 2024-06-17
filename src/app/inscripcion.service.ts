import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Inscripcion } from './inscripcion';

@Injectable({
  providedIn: 'root'
})
export class InscripcionService {
  private apiUrl = 'http://localhost:8085/api/v2/inscripciones';

  constructor(private http: HttpClient) { }

  createInscripcion(inscripcion: Inscripcion): Observable<Inscripcion> {
    return this.http.post<Inscripcion>(this.apiUrl, inscripcion);
  }

  getAllInscripciones(): Observable<Inscripcion[]> {
    return this.http.get<Inscripcion[]>(this.apiUrl);
  }

  getInscripcionById(id: number): Observable<Inscripcion> {
    return this.http.get<Inscripcion>(`${this.apiUrl}/${id}`);
  }

  deleteInscripcion(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
