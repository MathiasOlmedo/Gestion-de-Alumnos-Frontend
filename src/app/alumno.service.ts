import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Alumno } from './alumno';

@Injectable({
  providedIn: 'root'
})
export class AlumnoService {
  private baseURL = "http://localhost:8085/api/v2/alumnos";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeAlumnos(): Observable<Alumno[]> {
    return this.httpClient.get<Alumno[]>(`${this.baseURL}`);
  }

  registrarAlumno(alumno: Alumno): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, alumno);
  }

  actualizarAlumno(id: number, alumno: Alumno): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, alumno);
  }

  obtenerAlumnoPorId(id: number): Observable<Alumno> {
    return this.httpClient.get<Alumno>(`${this.baseURL}/${id}`);
  }

  eliminarAlumno(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
