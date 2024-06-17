import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno';
import { AlumnoService } from '../alumno.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-alumno',
  templateUrl: './registrar-alumno.component.html',
  styleUrls: ['./registrar-alumno.component.css']
})
export class RegistrarAlumnoComponent implements OnInit {

  alumno: Alumno = new Alumno();

  constructor(private alumnoService: AlumnoService, private router: Router) { }

  ngOnInit(): void {}

  guardarAlumno() {
    this.alumnoService.registrarAlumno(this.alumno).subscribe(
      data => {
        console.log(data);
        this.irAListaDeAlumnos();
      },
      error => console.log(error)
    );
  }

  irAListaDeAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  onSubmit() {
    this.guardarAlumno();
  }
}
