import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllAgentComponent } from './get-all-agent.component';

describe('GetAllAgentComponent', () => {
  let component: GetAllAgentComponent;
  let fixture: ComponentFixture<GetAllAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
