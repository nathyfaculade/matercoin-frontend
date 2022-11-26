import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasRastreioComponent } from './moedas-rastreio.component';

describe('MoedasRastreioComponent', () => {
  let component: MoedasRastreioComponent;
  let fixture: ComponentFixture<MoedasRastreioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasRastreioComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasRastreioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
