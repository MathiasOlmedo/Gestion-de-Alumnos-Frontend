import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoDetallesComponent } from './encargado-detalles.component';

describe('EncargadoDetallesComponent', () => {
  let component: EncargadoDetallesComponent;
  let fixture: ComponentFixture<EncargadoDetallesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [EncargadoDetallesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EncargadoDetallesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
