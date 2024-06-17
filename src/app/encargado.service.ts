import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Encargado } from './encargado';

@Injectable({
  providedIn: 'root'
})
export class EncargadoService {
  private baseURL = "http://localhost:8085/api/v2/encargados";

  constructor(private httpClient: HttpClient) { }

  obtenerListaDeEncargados(): Observable<Encargado[]> {
    return this.httpClient.get<Encargado[]>(`${this.baseURL}`);
  }

  registrarEncargado(encargado: Encargado): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, encargado);
  }

  actualizarEncargado(id: number, encargado: Encargado): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, encargado);
  }

  obtenerEncargadoPorId(id: number): Observable<Encargado> {
    return this.httpClient.get<Encargado>(`${this.baseURL}/${id}`);
  }

  eliminarEncargado(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }
}
