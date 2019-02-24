import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FlypanelComponent } from './flypanel.component';

describe('FlypanelComponent', () => {
  let component: FlypanelComponent;
  let fixture: ComponentFixture<FlypanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FlypanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FlypanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
