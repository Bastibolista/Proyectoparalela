import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficoAlumnoComponent } from './grafico-alumno.component';

describe('GraficoAlumnoComponent', () => {
  let component: GraficoAlumnoComponent;
  let fixture: ComponentFixture<GraficoAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficoAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficoAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
