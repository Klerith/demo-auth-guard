import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Pagina1Component } from './pagina1.component';

describe('Pagina1Component', () => {
  let component: Pagina1Component;
  let fixture: ComponentFixture<Pagina1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Pagina1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Pagina1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});