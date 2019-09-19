import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByRegionComponent } from './get-by-region.component';

describe('GetByRegionComponent', () => {
  let component: GetByRegionComponent;
  let fixture: ComponentFixture<GetByRegionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByRegionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByRegionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
