import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TabsComponentComponent } from './tabs-component.component';

describe('TabsComponentComponent', () => {
  let component: TabsComponentComponent;
  let fixture: ComponentFixture<TabsComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TabsComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TabsComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
