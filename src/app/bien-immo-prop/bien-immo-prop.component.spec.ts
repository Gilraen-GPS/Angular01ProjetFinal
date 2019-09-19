import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienImmoPropComponent } from './bien-immo-prop.component';

describe('BienImmoPropComponent', () => {
  let component: BienImmoPropComponent;
  let fixture: ComponentFixture<BienImmoPropComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienImmoPropComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienImmoPropComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
