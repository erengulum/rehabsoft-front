import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeneComponent } from './dene.component';

describe('DeneComponent', () => {
  let component: DeneComponent;
  let fixture: ComponentFixture<DeneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
