import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoeHeaderComponent } from './goe-header.component';

describe('GoeHeaderComponent', () => {
  let component: GoeHeaderComponent;
  let fixture: ComponentFixture<GoeHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoeHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoeHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
