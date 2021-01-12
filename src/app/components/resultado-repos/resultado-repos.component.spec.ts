import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadoReposComponent } from './resultado-repos.component';

describe('ResultadoReposComponent', () => {
  let component: ResultadoReposComponent;
  let fixture: ComponentFixture<ResultadoReposComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResultadoReposComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadoReposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
