import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { RegistrarAlumnoComponent } from './registrar-alumno/registrar-alumno.component';
import { ActualizarAlumnoComponent } from './actualizar-alumno/actualizar-alumno.component';
import { AlumnoDetallesComponent } from './alumno-detalles/alumno-detalles.component';
import { ListaEncargadosComponent } from './lista-encargados/lista-encargados.component';
import { RegistrarEncargadoComponent } from './registrar-encargado/registrar-encargado.component';
import { ActualizarEncargadoComponent } from './actualizar-encargado/actualizar-encargado.component';
import { EncargadoDetallesComponent } from './encargado-detalles/encargado-detalles.component';
import { InscripcionComponent } from './inscripcion/inscripcion.component';
import { ListaInscripcionesComponent } from './lista-inscripciones/lista-inscripciones.component';
import { GenerarContratoComponent } from './generar-contrato/generar-contrato.component';

const routes: Routes = [
  { path: 'alumnos', component: ListaAlumnosComponent },
  { path: 'registrar-alumno', component: RegistrarAlumnoComponent },
  { path: 'actualizar-alumno/:id', component: ActualizarAlumnoComponent },
  { path: 'alumno-detalles/:id', component: AlumnoDetallesComponent },
  { path: 'encargados', component: ListaEncargadosComponent },
  { path: 'registrar-encargado', component: RegistrarEncargadoComponent },
  { path: 'actualizar-encargado/:id', component: ActualizarEncargadoComponent },
  { path: 'encargado-detalles/:id', component: EncargadoDetallesComponent },
  { path: 'inscripciones', component: ListaInscripcionesComponent },
  { path: 'registrar-inscripcion', component: InscripcionComponent },
  { path: 'generar-contrato/:inscripcionId', component: GenerarContratoComponent },
  { path: '', redirectTo: '/inscripciones', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
