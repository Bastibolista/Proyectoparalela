import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoDocenteComponent } from './aviso-docente.component';

describe('AvisoDocenteComponent', () => {
  let component: AvisoDocenteComponent;
  let fixture: ComponentFixture<AvisoDocenteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvisoDocenteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvisoDocenteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
