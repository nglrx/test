import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StringPipesComponent } from './string-pipes.component';

describe('StringPipesComponent', () => {
  let component: StringPipesComponent;
  let fixture: ComponentFixture<StringPipesComponent>;

  beforeEach(async(() => {
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
