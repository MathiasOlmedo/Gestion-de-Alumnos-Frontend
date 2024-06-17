import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncargadosComponent } from './lista-encargados.component';

describe('ListaEncargadosComponent', () => {
  let component: ListaEncargadosComponent;
  let fixture: ComponentFixture<ListaEncargadosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaEncargadosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaEncargadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
