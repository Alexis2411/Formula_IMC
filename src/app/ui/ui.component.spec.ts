import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UiComponent } from './ui.component';

describe('UiComponent', () => {
  let component: UiComponent;
  let fixture: ComponentFixture<UiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('Recibe 67.5 en peso y 1.5 en altura devuelve  30',()=>{
    let result=0;
    component.value1=67.5;
    component.value2=1.5;
    component.calcular();
    result=component.resultado;
    expect(result).toBe(30);
  });
  it('Recibe 75 en peso muestra 75 en peso',()=>{
    let result=0;
    result=component.value1=75;
    expect(result).toBe(75);
  });
  it('Recibe 1.7 en altura muestra 1.7 en altura',()=>{
    let result=0;
    result=component.value2=1.7;
    expect(result).toBe(1.7);
  });
});