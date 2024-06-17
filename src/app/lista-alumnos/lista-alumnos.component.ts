import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-alumnos',
  templateUrl: './lista-alumnos.component.html',
  styleUrls: ['./lista-alumnos.component.css']
})
export class ListaAlumnosComponent implements OnInit {
  alumnos: Alumno[];

  constructor(
    private alumnoService: AlumnoService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.obtenerAlumnos();
  }

  actualizarAlumno(id: number) {
    this.router.navigate(['actualizar-alumno', id]);
  }

  eliminarAlumno(id: number) {
    this.alumnoService.eliminarAlumno(id).subscribe(() => {
      this.obtenerAlumnos();
    });
  }

  obtenerAlumnos() {
    this.alumnoService.obtenerListaDeAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  verDetallesDelAlumno(id: number) {
    this.router.navigate(['alumno-detalles', id]);
  }
}
