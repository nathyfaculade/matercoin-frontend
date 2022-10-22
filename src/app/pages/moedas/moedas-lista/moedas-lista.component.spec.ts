import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoedasListaComponent } from './moedas-lista.component';

describe('MoedasListaComponent', () => {
  let component: MoedasListaComponent;
  let fixture: ComponentFixture<MoedasListaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoedasListaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoedasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
