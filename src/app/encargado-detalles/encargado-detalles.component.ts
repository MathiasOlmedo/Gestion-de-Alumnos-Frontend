import { Component, OnInit } from '@angular/core';
import { Encargado } from '../encargado';
import { ActivatedRoute } from '@angular/router';
import { EncargadoService } from '../encargado.service';

@Component({
  selector: 'app-encargado-detalles',
  templateUrl: './encargado-detalles.component.html',
  styleUrls: ['./encargado-detalles.component.css']
})
export class EncargadoDetallesComponent implements OnInit{

  id: number;
  encargado: Encargado;
  
  constructor(private route: ActivatedRoute, private encargadoServicio: EncargadoService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.encargado = new Encargado();
    this.encargadoServicio.obtenerEncargadoPorId(this.id).subscribe(dato => {
      this.encargado = dato;
    });
  }
}
