import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BienImmoClientComponent } from './bien-immo-client.component';

describe('BienImmoClientComponent', () => {
  let component: BienImmoClientComponent;
  let fixture: ComponentFixture<BienImmoClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BienImmoClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BienImmoClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
