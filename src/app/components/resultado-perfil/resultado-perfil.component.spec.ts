import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoPerfilComponent } from './resultado-perfil.component';

describe('ResultadoPerfilComponent', () => {
  let component: ResultadoPerfilComponent;
  let fixture: ComponentFixture<ResultadoPerfilComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoPerfilComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
