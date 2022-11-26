import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasTransferenciaComponent } from './moedas-transferencia.component';

describe('MoedasTransferenciaComponent', () => {
  let component: MoedasTransferenciaComponent;
  let fixture: ComponentFixture<MoedasTransferenciaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasTransferenciaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasTransferenciaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
