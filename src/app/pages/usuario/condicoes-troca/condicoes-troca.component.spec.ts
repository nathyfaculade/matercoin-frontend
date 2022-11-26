import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CondicoesTrocaComponent } from './condicoes-troca.component';

describe('CondicoesTrocaComponent', () => {
  let component: CondicoesTrocaComponent;
  let fixture: ComponentFixture<CondicoesTrocaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CondicoesTrocaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CondicoesTrocaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
