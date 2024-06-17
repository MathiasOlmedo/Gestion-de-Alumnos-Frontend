import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    ListaAlumnosComponent,
    RegistrarAlumnoComponent,
    ActualizarAlumnoComponent,
    AlumnoDetallesComponent,
    ListaEncargadosComponent,
    RegistrarEncargadoComponent,
    ActualizarEncargadoComponent,
    EncargadoDetallesComponent,
    InscripcionComponent,
    ListaInscripcionesComponent,
    GenerarContratoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
