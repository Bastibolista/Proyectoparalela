import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoDocenteComponent } from './listado-docente.component';

describe('ListadoDocenteComponent', () => {
  let component: ListadoDocenteComponent;
  let fixture: ComponentFixture<ListadoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListadoDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListadoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
