import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasCadastrosComponent } from './moedas-cadastros.component';

describe('MoedasCadastrosComponent', () => {
  let component: MoedasCadastrosComponent;
  let fixture: ComponentFixture<MoedasCadastrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasCadastrosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasCadastrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
