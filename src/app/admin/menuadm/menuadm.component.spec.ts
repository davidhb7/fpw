import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuadmComponent } from './menuadm.component';

describe('MenuadmComponent', () => {
  let component: MenuadmComponent;
  let fixture: ComponentFixture<MenuadmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuadmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuadmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
