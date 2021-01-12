import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuscaGithubComponent } from './busca-github.component';

describe('BuscaGithubComponent', () => {
  let component: BuscaGithubComponent;
  let fixture: ComponentFixture<BuscaGithubComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuscaGithubComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BuscaGithubComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
