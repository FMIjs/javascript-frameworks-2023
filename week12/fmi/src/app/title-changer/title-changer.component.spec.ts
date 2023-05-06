import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleChangerComponent } from './title-changer.component';

describe('TitleChangerComponent', () => {
  let component: TitleChangerComponent;
  let fixture: ComponentFixture<TitleChangerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleChangerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleChangerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
