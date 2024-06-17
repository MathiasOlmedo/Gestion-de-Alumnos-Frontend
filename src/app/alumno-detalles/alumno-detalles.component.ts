import { Component, OnInit } from '@angular/core';
import { Alumno } from '../alumno'; 
import { ActivatedRoute } from '@angular/router';
import { AlumnoService } from '../alumno.service'; 

@Component({
  selector: 'app-alumno-detalles', 
  templateUrl: './alumno-detalles.component.html',
  styleUrls: ['./alumno-detalles.component.css'] 
})
export class AlumnoDetallesComponent implements OnInit { 

  id: number;
  alumno: Alumno; 
  
  constructor(private route: ActivatedRoute, private alumnoServicio: AlumnoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.alumno = new Alumno(); 
    this.alumnoServicio.obtenerAlumnoPorId(this.id).subscribe(dato => {
      this.alumno = dato;
    });
  }
}
