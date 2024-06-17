import { Component, OnInit } from '@angular/core';
import { Encargado } from '../encargado';
import { EncargadoService } from '../encargado.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-encargados',
  templateUrl: './lista-encargados.component.html',
  styleUrls: ['./lista-encargados.component.css']
})
export class ListaEncargadosComponent implements OnInit {

  encargados: Encargado[];

  constructor(private encargadoServicio: EncargadoService, private router: Router) { }

  ngOnInit(): void {
    this.obtenerEncargados();
  }

  actualizarEncargado(id: number) {
    this.router.navigate(['actualizar-encargado', id]);
  }

  eliminarEncargado(id: number) {
    this.encargadoServicio.eliminarEncargado(id).subscribe(() => {
      this.obtenerEncargados();
    });
  }

  obtenerEncargados() {
    this.encargadoServicio.obtenerListaDeEncargados().subscribe(data => {
      this.encargados = data;
    });
  }

  verDetallesDelEncargado(id: number) {
    this.router.navigate(['encargado-detalles', id]);
  }
}
