import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatetravallComponent } from './createtravall.component';

describe('CreatetravallComponent', () => {
  let component: CreatetravallComponent;
  let fixture: ComponentFixture<CreatetravallComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatetravallComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatetravallComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
