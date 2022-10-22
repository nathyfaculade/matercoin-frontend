import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CofreMatercoinComponent } from './cofre-matercoin.component';

describe('CofreMatercoinComponent', () => {
  let component: CofreMatercoinComponent;
  let fixture: ComponentFixture<CofreMatercoinComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CofreMatercoinComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CofreMatercoinComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
