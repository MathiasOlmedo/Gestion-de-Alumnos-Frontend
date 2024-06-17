import { Component, OnInit } from '@angular/core';
import { AlumnoService } from '../alumno.service';
import { EncargadoService } from '../encargado.service';
import { InscripcionService } from '../inscripcion.service';
import { CursoService } from '../curso.service';
import { Alumno } from '../alumno';
import { Encargado } from '../encargado';
import { Curso } from '../curso';
import { Inscripcion } from '../inscripcion';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-inscripcion',
  templateUrl: './inscripcion.component.html',
  styleUrls: ['./inscripcion.component.css']
})
export class InscripcionComponent implements OnInit {
  alumnos: Alumno[] = [];
  encargados: Encargado[] = [];
  cursos: Curso[] = [];
  inscripcion: Inscripcion = new Inscripcion();

  constructor(
    private alumnoService: AlumnoService,
    private encargadoService: EncargadoService,
    private cursoService: CursoService,
    private inscripcionService: InscripcionService
  ) { }

  ngOnInit(): void {
    this.obtenerAlumnos();
    this.obtenerEncargados();
    this.obtenerCursos();
  }

  obtenerAlumnos() {
    this.alumnoService.obtenerListaDeAlumnos().subscribe(data => {
      this.alumnos = data;
    });
  }

  obtenerEncargados() {
    this.encargadoService.obtenerListaDeEncargados().subscribe(data => {
      this.encargados = data;
    });
  }

  obtenerCursos() {
    this.cursoService.obtenerListaDeCursos().subscribe(data => {
      this.cursos = data;
    });
  }

  createInscripcion() {
    this.inscripcionService.createInscripcion(this.inscripcion).subscribe(() => {
      Swal.fire({
        icon: 'success',
        title: 'Inscripción creada',
        text: 'La inscripción ha sido creada exitosamente',
      });
      this.inscripcion = new Inscripcion();
    }, error => {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Hubo un error al crear la inscripción',
      });
    });
  }
}
