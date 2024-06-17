import { Component, OnInit } from '@angular/core';
import { InscripcionService } from '../inscripcion.service';
import { Inscripcion } from '../inscripcion';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-inscripciones',
  templateUrl: './lista-inscripciones.component.html',
  styleUrls: ['./lista-inscripciones.component.css']
})
export class ListaInscripcionesComponent implements OnInit {
  inscripciones: Inscripcion[] = [];

  constructor(private inscripcionService: InscripcionService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerInscripciones();
  }

  obtenerInscripciones() {
    this.inscripcionService.getAllInscripciones().subscribe(data => {
      this.inscripciones = data;
    });
  }

  generarContrato(inscripcionId: number) {
    this.router.navigate(['/generar-contrato', inscripcionId]);
  }
}
