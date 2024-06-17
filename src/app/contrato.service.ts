import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Contrato } from './contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {
  private apiUrl = 'http://localhost:8085/api/v2/contratos';

  constructor(private http: HttpClient) { }

  generarContrato(inscripcionId: number): Observable<Contrato> {
    return this.http.post<Contrato>(`${this.apiUrl}/generar?inscripcionId=${inscripcionId}`, {});
  }

  descargarContrato(inscripcionId: number): Observable<Blob> {
    return this.http.get(`${this.apiUrl}/descargar/${inscripcionId}`, { responseType: 'blob' });
  }
}
