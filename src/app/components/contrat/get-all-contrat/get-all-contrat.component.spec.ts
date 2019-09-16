import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllContratComponent } from './get-all-contrat.component';

describe('GetAllContratComponent', () => {
  let component: GetAllContratComponent;
  let fixture: ComponentFixture<GetAllContratComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllContratComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllContratComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
