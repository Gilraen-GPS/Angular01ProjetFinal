import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetByIdAgentComponent } from './get-by-id-agent.component';

describe('GetByIdAgentComponent', () => {
  let component: GetByIdAgentComponent;
  let fixture: ComponentFixture<GetByIdAgentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetByIdAgentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetByIdAgentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
