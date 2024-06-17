import { Component, OnInit } from '@angular/core';
import { Encargado } from '../encargado';
import { ActivatedRoute, Router } from '@angular/router';
import { EncargadoService } from '../encargado.service';

@Component({
  selector: 'app-actualizar-encargado',
  templateUrl: './actualizar-encargado.component.html',
  styleUrls: ['./actualizar-encargado.component.css']
})
export class ActualizarEncargadoComponent implements OnInit {

  id: number;
  encargado: Encargado = new Encargado();

  constructor(private encargadoServicio: EncargadoService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.encargadoServicio.obtenerEncargadoPorId(this.id).subscribe(dato => {
      this.encargado = dato;
    });
  }

  irAListaDeEncargados() {
    this.router.navigate(['/encargados']);
  }

  onSubmit() {
    this.encargadoServicio.actualizarEncargado(this.id, this.encargado).subscribe(dato => {
      this.irAListaDeEncargados();
    });
  }
}
