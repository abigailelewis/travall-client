import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravallComponent } from './travall.component';

describe('TravallComponent', () => {
  let component: TravallComponent;
  let fixture: ComponentFixture<TravallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
