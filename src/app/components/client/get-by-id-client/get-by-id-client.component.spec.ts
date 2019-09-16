import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdClientComponent } from './get-by-id-client.component';

describe('GetByIdClientComponent', () => {
  let component: GetByIdClientComponent;
  let fixture: ComponentFixture<GetByIdClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
