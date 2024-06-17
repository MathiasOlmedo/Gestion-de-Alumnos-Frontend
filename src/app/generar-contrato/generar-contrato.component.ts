import { Component, OnInit } from '@angular/core';
import { ContratoService } from '../contrato.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-generar-contrato',
  templateUrl: './generar-contrato.component.html',
  styleUrls: ['./generar-contrato.component.css']
})
export class GenerarContratoComponent implements OnInit {
  inscripcionId: number;
  contratoGenerado: boolean = false;

  constructor(
    private contratoService: ContratoService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.inscripcionId = +this.route.snapshot.paramMap.get('inscripcionId')!;
  }

  generarContrato(): void {
    this.contratoService.generarContrato(this.inscripcionId).subscribe(() => {
      this.contratoGenerado = true;
    });
  }

  descargarContrato(): void {
    this.contratoService.descargarContrato(this.inscripcionId).subscribe(response => {
      const blob = new Blob([response], { type: 'application/pdf' });
      const url = window.URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.href = url;
      link.download = 'contrato.pdf';
      link.click();
      window.URL.revokeObjectURL(url);
    });
  }
}
