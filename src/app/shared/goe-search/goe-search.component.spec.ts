import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoeSearchComponent } from './goe-search.component';

describe('GoeSearchComponent', () => {
  let component: GoeSearchComponent;
  let fixture: ComponentFixture<GoeSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoeSearchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoeSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
