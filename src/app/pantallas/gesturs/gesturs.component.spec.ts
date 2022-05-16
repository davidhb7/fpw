import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestursComponent } from './gesturs.component';

describe('GestursComponent', () => {
  let component: GestursComponent;
  let fixture: ComponentFixture<GestursComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestursComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
