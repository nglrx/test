import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { CamelCaseComponent } from './camel-case.component';

describe('CamelCaseComponent', () => {
  let component: CamelCaseComponent;
  let fixture: ComponentFixture<CamelCaseComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ CamelCaseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CamelCaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
