import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActualizarEncargadoComponent } from './actualizar-encargado.component';

describe('ActualizarEncargadoComponent', () => {
  let component: ActualizarEncargadoComponent;
  let fixture: ComponentFixture<ActualizarEncargadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActualizarEncargadoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ActualizarEncargadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
