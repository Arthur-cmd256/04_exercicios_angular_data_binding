import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColecaoCursosComponent } from './colecao-cursos.component';

describe('ColecaoCursosComponent', () => {
  let component: ColecaoCursosComponent;
  let fixture: ComponentFixture<ColecaoCursosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColecaoCursosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ColecaoCursosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
