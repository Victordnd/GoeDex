import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoeListComponent } from './goe-list.component';

describe('GoeListComponent', () => {
  let component: GoeListComponent;
  let fixture: ComponentFixture<GoeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
