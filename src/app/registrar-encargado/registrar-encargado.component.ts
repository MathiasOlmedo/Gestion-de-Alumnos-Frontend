import { Component, OnInit } from '@angular/core';
import { Encargado } from '../encargado';
import { EncargadoService } from '../encargado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-encargado',
  templateUrl: './registrar-encargado.component.html',
  styleUrls: ['./registrar-encargado.component.css']
})
export class RegistrarEncargadoComponent implements OnInit {
  encargado: Encargado = new Encargado();

  constructor(private encargadoService: EncargadoService, private router: Router) { }

  ngOnInit(): void {}

  guardarEncargado() {
    this.encargadoService.registrarEncargado(this.encargado).subscribe(
      data => {
        console.log(data);
        this.irAListaDeEncargados();
      },
      error => console.log(error)
    );
  }

  irAListaDeEncargados() {
    this.router.navigate(['/encargados']);
  }

  onSubmit() {
    this.guardarEncargado();
  }
}
