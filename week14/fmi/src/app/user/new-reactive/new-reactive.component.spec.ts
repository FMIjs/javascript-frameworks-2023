import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewReactiveComponent } from './new-reactive.component';

describe('NewReactiveComponent', () => {
  let component: NewReactiveComponent;
  let fixture: ComponentFixture<NewReactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewReactiveComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewReactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
