import { AlumnoService } from '../alumno.service';
import { Alumno } from '../alumno';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-alumno',
  templateUrl: './actualizar-alumno.component.html',
  styleUrls: ['./actualizar-alumno.component.css']
})
export class ActualizarAlumnoComponent implements OnInit {
  
  id: number;
  alumno: Alumno = new Alumno();

  constructor(private alumnoServicio: AlumnoService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idParam = this.route.snapshot.params['id'];
    this.id = idParam ? +idParam : 0;

    this.alumnoServicio.obtenerAlumnoPorId(this.id).subscribe(
      data => {
        this.alumno = data;
      },
      error => {
        console.log(error);
      }
    );
  }

  irALaListaDeAlumnos() {
    this.router.navigate(['/alumnos']);
  }

  onSubmit() {
    this.alumnoServicio.actualizarAlumno(this.id, this.alumno).subscribe(
      data => {
        this.irALaListaDeAlumnos();
      },
      error => {
        console.log(error);
      }
    );
  }
}
