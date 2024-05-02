import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CtrlactividadComponent } from './ctrlactividad.component';

describe('CtrlactividadComponent', () => {
  let component: CtrlactividadComponent;
  let fixture: ComponentFixture<CtrlactividadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CtrlactividadComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CtrlactividadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
