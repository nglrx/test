import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { StringPipesComponent } from './string-pipes.component';

describe('StringPipesComponent', () => {
  let component: StringPipesComponent;
  let fixture: ComponentFixture<StringPipesComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ StringPipesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StringPipesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
