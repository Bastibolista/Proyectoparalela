import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CambiarClaveAlumnoComponent } from './cambiar-clave-alumno.component';

describe('CambiarClaveAlumnoComponent', () => {
  let component: CambiarClaveAlumnoComponent;
  let fixture: ComponentFixture<CambiarClaveAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CambiarClaveAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CambiarClaveAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
